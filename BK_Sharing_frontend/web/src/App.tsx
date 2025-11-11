import { HardDrive, Upload, Bell, Settings, Search, FileText, Star, Plus, Filter, X, Menu, Info, Download, Tag, ChevronLeft, Edit2, User, Mail, Calendar, BookOpen, LogOut, FileCheck, Lock, AlertCircle, Globe } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'storage' | 'upload' | 'notification' | 'config'>('home');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');
  const [courseCodeFilter, setCourseCodeFilter] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [tempTag, setTempTag] = useState('');
  const [tempCourseCode, setTempCourseCode] = useState('');
  const [tempRating, setTempRating] = useState(0);
  const [showTagOptions, setShowTagOptions] = useState(false);
  const [viewingFile, setViewingFile] = useState<any>(null);
  const [showFileMenu, setShowFileMenu] = useState(false);
  const [showFileInfo, setShowFileInfo] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);
  const [userTags, setUserTags] = useState<{[key: number]: string[]}>({});
  const [userRatings, setUserRatings] = useState<{[key: number]: number}>({});
  const [newTagInput, setNewTagInput] = useState('');
  const [showNewTagInput, setShowNewTagInput] = useState(false);
  const [storageFiles, setStorageFiles] = useState<number[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFileTag, setNewFileTag] = useState('');
  const [newFileCourseCode, setNewFileCourseCode] = useState('');
  const [showNewFileTagOptions, setShowNewFileTagOptions] = useState(false);
  
  // Notification states
  const [notifications, setNotifications] = useState<any[]>([]);
  
  // Config & Profile states
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Nguyễn Văn A',
    username: '@nguyenvana',
    major: 'Khoa học máy tính',
    registrationDate: '15/01/2024',
    email: 'nguyenvana@example.com'
  });
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempProfileData, setTempProfileData] = useState(profileData);
  
  // Auth states
  const [authScreen, setAuthScreen] = useState<'login' | 'signup' | 'app'>('login');
  const [isGuest, setIsGuest] = useState(false);
  const [loginForm, setLoginForm] = useState({ account: '', password: '' });
  const [signupForm, setSignupForm] = useState({ email: '', password: '', confirmPassword: '' });
  
  // Settings states
  const [showSettings, setShowSettings] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showReportBug, setShowReportBug] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [changePasswordForm, setChangePasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const tags = ['Đại cương', 'Chính trị', 'Khoa học máy tính', 'Kỹ thuật máy tính', 'Toán học', 'Vật lý'];
  
  const recentFiles = [
    { id: 1, name: 'Project_Report.pdf', rating: 5, tag: 'Khoa học máy tính', courseCode: 'CO3035' },
    { id: 2, name: 'Design_Mockup.fig', rating: 4, tag: 'Kỹ thuật máy tính', courseCode: 'MH1001' },
    { id: 3, name: 'Meeting_Notes.docx', rating: 3, tag: 'Đại cương', courseCode: 'MT1002' }
  ];

  const allFiles = [
    { id: 1, name: 'Project_Report.pdf', rating: 5, tag: 'Khoa học máy tính', courseCode: 'CO3035' },
    { id: 2, name: 'Design_Mockup.fig', rating: 4, tag: 'Kỹ thuật máy tính', courseCode: 'MH1001' },
    { id: 3, name: 'Meeting_Notes.docx', rating: 3, tag: 'Đại cương', courseCode: 'MT1002' },
    { id: 4, name: 'Budget_2024.xlsx', rating: 5, tag: 'Toán học', courseCode: 'MT2001' },
    { id: 5, name: 'Presentation.pptx', rating: 4, tag: 'Chính trị', courseCode: 'CT1001' },
    { id: 6, name: 'Contract_Draft.pdf', rating: 3, tag: 'Đại cương', courseCode: 'DC1001' },
    { id: 7, name: 'Image_Assets.zip', rating: 5, tag: 'Khoa học máy tính', courseCode: 'CO3012' },
    { id: 8, name: 'User_Guide.docx', rating: 2, tag: 'Kỹ thuật máy tính', courseCode: 'KT2001' },
    { id: 9, name: 'Database_Schema.sql', rating: 4, tag: 'Khoa học máy tính', courseCode: 'CO3001' },
    { id: 10, name: 'Logo_Design.ai', rating: 5, tag: 'Kỹ thuật máy tính', courseCode: 'MH1002' },
    { id: 11, name: 'Marketing_Plan.pdf', rating: 3, tag: 'Đại cương', courseCode: 'DC2001' },
    { id: 12, name: 'Timeline.xlsx', rating: 4, tag: 'Toán học', courseCode: 'MT1003' }
  ];

  // Get files based on current view
  const getDisplayFiles = () => {
    if (currentTab === 'storage') {
      return allFiles.filter(file => storageFiles.includes(file.id));
    } else if (currentTab === 'upload') {
      return uploadedFiles;
    }
    return allFiles;
  };

  const displayFiles = getDisplayFiles();

  const filteredFiles = displayFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || file.tag === selectedTag;
    const matchesCourseCode = !courseCodeFilter || file.courseCode.toLowerCase().includes(courseCodeFilter.toLowerCase());
    const matchesRating = file.rating >= minRating;
    return matchesSearch && matchesTag && matchesCourseCode && matchesRating;
  });

  const handleOpenFilter = () => {
    setTempTag(selectedTag);
    setTempCourseCode(courseCodeFilter);
    setTempRating(minRating);
    setShowFilterModal(true);
  };

  const handleApplyFilter = () => {
    setSelectedTag(tempTag);
    setCourseCodeFilter(tempCourseCode);
    setMinRating(tempRating);
    setShowFilterModal(false);
    setShowTagOptions(false);
  };

  const handleCancelFilter = () => {
    setSelectedTag('');
    setCourseCodeFilter('');
    setMinRating(0);
    setTempTag('');
    setTempCourseCode('');
    setTempRating(0);
    setShowFilterModal(false);
    setShowTagOptions(false);
  };

  const handleCloseFilter = () => {
    setShowFilterModal(false);
    setShowTagOptions(false);
  };

  const handleFileClick = (file: any) => {
    setViewingFile(file);
  };

  const handleCloseFile = () => {
    setViewingFile(null);
    setShowFileMenu(false);
    setShowFileInfo(false);
    setShowAddTag(false);
  };

  const handleAddToStorage = () => {
    if (viewingFile && !storageFiles.includes(viewingFile.id)) {
      setStorageFiles([...storageFiles, viewingFile.id]);
      alert(`Đã thêm "${viewingFile.name}" vào Storage`);
    }
    setShowFileMenu(false);
  };

  const handleDownload = () => {
    alert(`Đang tải "${viewingFile.name}"`);
    setShowFileMenu(false);
  };

  const handleAddUserTag = (tag: string) => {
    if (viewingFile) {
      const currentTags = userTags[viewingFile.id] || [];
      if (!currentTags.includes(tag)) {
        setUserTags({
          ...userTags,
          [viewingFile.id]: [...currentTags, tag]
        });
      }
    }
  };

  const handleAddNewTag = () => {
    if (newTagInput.trim()) {
      handleAddUserTag(newTagInput.trim());
      setNewTagInput('');
      setShowNewTagInput(false);
    }
  };

  const handleRateFile = (rating: number) => {
    if (viewingFile) {
      setUserRatings({
        ...userRatings,
        [viewingFile.id]: rating
      });
      
      // Add notification
      const notification = {
        id: Date.now(),
        type: 'rating',
        title: 'Đánh giá tài liệu',
        content: `Bạn đã đánh giá ${rating} sao cho tài liệu "${viewingFile.name}"`,
        timestamp: new Date().toLocaleString('vi-VN')
      };
      setNotifications([notification, ...notifications]);
    }
  };

  const availableUserTags = ['Quan trọng', 'Ôn tập', 'Đã học', 'Cần xem lại', 'Tham khảo'];

  const handleLogin = () => {
    if (loginForm.account.trim() && loginForm.password.trim()) {
      setAuthScreen('app');
      setIsGuest(false);
      setProfileData({
        name: 'Nguyễn Văn A',
        username: loginForm.account,
        major: 'Khoa học máy tính',
        registrationDate: new Date().toLocaleDateString('vi-VN'),
        email: 'nguyenvana@example.com'
      });
      setLoginForm({ account: '', password: '' });
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  };

  const handleSignup = () => {
    if (signupForm.email.trim() && signupForm.password.trim() && signupForm.confirmPassword.trim()) {
      if (signupForm.password !== signupForm.confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
      }
      setAuthScreen('app');
      setIsGuest(false);
      setProfileData({
        name: 'Người dùng mới',
        username: '@' + signupForm.email.split('@')[0],
        major: 'Chưa cập nhật',
        registrationDate: new Date().toLocaleDateString('vi-VN'),
        email: signupForm.email
      });
      setSignupForm({ email: '', password: '', confirmPassword: '' });
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  };

  const handleGuestMode = () => {
    setAuthScreen('app');
    setIsGuest(true);
    setProfileData({
      name: 'Khách',
      username: '@guest',
      major: 'N/A',
      registrationDate: new Date().toLocaleDateString('vi-VN'),
      email: 'guest@example.com'
    });
  };

  const handleLogout = () => {
    setAuthScreen('login');
    setIsGuest(false);
    setCurrentTab('home');
    setShowSettings(false);
    setShowEditProfile(false);
  };

  const handleChangePassword = () => {
    if (!changePasswordForm.currentPassword || !changePasswordForm.newPassword || !changePasswordForm.confirmNewPassword) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    if (changePasswordForm.newPassword !== changePasswordForm.confirmNewPassword) {
      alert('Mật khẩu mới không khớp!');
      return;
    }
    if (changePasswordForm.newPassword.length < 6) {
      alert('Mật khẩu mới phải có ít nhất 6 ký tự!');
      return;
    }
    // Success
    alert('Đổi mật khẩu thành công!');
    setChangePasswordForm({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    setShowChangePassword(false);
    setShowSettings(false);
    handleLogout();
  };

  const handleAddClick = () => {
    if (isGuest) {
      alert('Vui lòng đăng nhập để thêm tài liệu!');
    } else {
      setShowUploadModal(true);
    }
  };

  const handleUploadFile = () => {
    if (newFileName.trim() && newFileTag && newFileCourseCode.trim()) {
      const newFile = {
        id: Date.now(),
        name: newFileName.trim(),
        tag: newFileTag,
        courseCode: newFileCourseCode.trim(),
        rating: 0
      };
      setUploadedFiles([newFile, ...uploadedFiles]);
      
      // Add notification
      const notification = {
        id: Date.now(),
        type: 'upload_success',
        title: 'Upload thành công',
        content: `Tài liệu "${newFile.name}" đã được upload thành công`,
        timestamp: new Date().toLocaleString('vi-VN')
      };
      setNotifications([notification, ...notifications]);
      
      setNewFileName('');
      setNewFileTag('');
      setNewFileCourseCode('');
      setShowUploadModal(false);
      setShowNewFileTagOptions(false);
      alert(`Đã upload "${newFile.name}" thành công!`);
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* iPhone 16 container */}
      <div className="relative w-[393px] h-[852px] bg-white rounded-[60px] shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Screen content */}
        <div className="relative w-full h-full flex flex-col bg-gradient-to-b from-blue-50 to-white">
          
          {authScreen === 'login' ? (
            <>
              {/* Login Screen */}
              <div className="flex-1 flex flex-col items-center justify-center px-8">
                <div className="w-full max-w-sm">
                  <h1 className="text-blue-600 text-center mb-2">Đăng nhập</h1>
                  <p className="text-gray-800 text-center mb-8">Chào mừng bạn trở lại !</p>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="account"
                      value={loginForm.account}
                      onChange={(e) => setLoginForm({...loginForm, account: e.target.value})}
                      className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-500 rounded-xl outline-none focus:border-blue-600 text-gray-800"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                      className="w-full px-4 py-3 bg-blue-50 border-0 rounded-xl outline-none text-gray-800"
                    />
                  </div>

                  <div className="text-right mt-2 mb-6">
                    <button className="text-blue-600 text-sm hover:underline">
                      Quên mật khẩu?
                    </button>
                  </div>

                  <button
                    onClick={handleLogin}
                    className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors mb-4"
                  >
                    Đăng nhập
                  </button>

                  <div className="text-center mb-4">
                    <button
                      onClick={() => setAuthScreen('signup')}
                      className="text-gray-800 text-sm"
                    >
                      Bạn chưa có tài khoản ?
                    </button>
                  </div>

                  <div className="text-center mb-4">
                    <button
                      onClick={handleGuestMode}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Tiếp tục với chế độ khách
                    </button>
                  </div>

                  <p className="text-blue-600 text-center text-sm mb-4">Or continue with</p>
                  
                  <div className="flex justify-center">
                    <button className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : authScreen === 'signup' ? (
            <>
              {/* Signup Screen */}
              <div className="flex-1 flex flex-col items-center justify-center px-8">
                <div className="w-full max-w-sm">
                  <h1 className="text-blue-600 text-center mb-2">Tạo tài khoản</h1>
                  <p className="text-gray-800 text-center mb-8 text-sm">Tạo tài khoản và tham gia cộng đồng cùng chúng tôi!</p>

                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                      className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-500 rounded-xl outline-none focus:border-blue-600 text-gray-800"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                      className="w-full px-4 py-3 bg-blue-50 border-0 rounded-xl outline-none text-gray-800"
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={signupForm.confirmPassword}
                      onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                      className="w-full px-4 py-3 bg-blue-50 border-0 rounded-xl outline-none text-gray-800"
                    />
                  </div>

                  <button
                    onClick={handleSignup}
                    className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors mt-6 mb-4"
                  >
                    Đăng ký
                  </button>

                  <div className="text-center mb-6">
                    <button
                      onClick={() => setAuthScreen('login')}
                      className="text-gray-800 text-sm"
                    >
                      Bạn đã có tài khoản ?
                    </button>
                  </div>

                  <p className="text-blue-600 text-center text-sm mb-4">Or continue with</p>
                  
                  <div className="flex justify-center">
                    <button className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : currentTab === 'home' && !showSearch ? (
            <>
              {/* Header with search button */}
              <div className="flex items-center justify-between px-6 pt-8 pb-4">
                <h1 className="text-gray-800">My App</h1>
                <button 
                  onClick={() => setShowSearch(true)}
                  className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  <Search size={20} />
                </button>
              </div>

              {/* Main content area */}
              <div className="flex-1 px-6 py-4">
                <div className="text-center mt-20">
                  <h2 className="text-gray-600">Welcome</h2>
                  <p className="text-gray-400 mt-2">Tap the search button or navigate below</p>
                </div>
              </div>

              {/* Recent Files Section */}
              <div className="px-4 pb-4 space-y-3">
                <h3 className="text-gray-700 px-2 mb-2">Recent Files</h3>
                {recentFiles.map((file) => (
                  <button
                    key={file.id}
                    onClick={() => handleFileClick(file)}
                    className="w-full bg-white rounded-lg shadow-md p-4 flex items-center justify-between border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="text-blue-600" size={20} />
                      </div>
                      <span className="text-gray-800 truncate">{file.name}</span>
                    </div>
                    <div className="flex items-center gap-1 ml-2">
                      <span className="text-gray-700">{file.rating}</span>
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (currentTab === 'storage' || currentTab === 'upload' || showSearch) ? (
            <>
              {/* Search/Storage/Upload Screen */}
              {/* Header */}
              <div className="px-4 pt-8 pb-4">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      if (showSearch) {
                        setShowSearch(false);
                      } else {
                        setCurrentTab('home');
                      }
                      setSearchQuery('');
                    }}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>
                  <div className="flex-1 flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-300">
                    <Search size={18} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder={
                        currentTab === 'storage' ? 'Search in Storage...' :
                        currentTab === 'upload' ? 'Search in Uploaded...' :
                        'Search files...'
                      }
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 outline-none bg-transparent text-gray-800"
                      autoFocus
                    />
                  </div>
                  <button 
                    onClick={handleOpenFilter}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Filter size={20} className="text-gray-600" />
                  </button>
                </div>
                {(selectedTag || courseCodeFilter || minRating > 0) && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-gray-500">Đang lọc:</span>
                    {selectedTag && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{selectedTag}</span>
                    )}
                    {courseCodeFilter && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{courseCodeFilter}</span>
                    )}
                    {minRating > 0 && (
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">≥ {minRating} ⭐</span>
                    )}
                    <button
                      onClick={handleCancelFilter}
                      className="text-xs text-red-500 hover:text-red-700"
                    >
                      Xóa lọc
                    </button>
                  </div>
                )}
              </div>

              {/* Files List - Scrollable */}
              <div className="flex-1 px-4 overflow-y-auto">
                <h3 className="text-gray-700 px-2 mb-3">
                  {currentTab === 'storage' ? 'Storage Files' :
                   currentTab === 'upload' ? 'Uploaded Files' :
                   'All Files'}
                </h3>
                <div className="space-y-3 pb-4">
                  {filteredFiles.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-400">
                        {currentTab === 'storage' ? 'Chưa có file trong Storage' :
                         currentTab === 'upload' ? 'Chưa có file được upload' :
                         'Không tìm thấy file nào'}
                      </p>
                    </div>
                  ) : (
                    filteredFiles.map((file) => (
                    <button
                      key={file.id}
                      onClick={() => handleFileClick(file)}
                      className="w-full bg-white rounded-lg shadow-md p-4 flex items-center justify-between border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="text-blue-600" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-800 truncate">{file.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{file.tag}</span>
                            <span className="text-xs text-gray-500">{file.courseCode}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                        <span className="text-gray-700">{file.rating}</span>
                        <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      </div>
                    </button>
                  )))
                  }
                </div>
              </div>
            </>
          ) : currentTab === 'notification' ? (
            <>
              {/* Notification Screen */}
              <div className="px-4 pt-8 pb-4">
                <h1 className="text-gray-800">Thông báo</h1>
              </div>

              {/* Notification List */}
              <div className="flex-1 px-4 overflow-y-auto">
                <div className="space-y-3 pb-4">
                  {notifications.length === 0 ? (
                    <div className="text-center py-12">
                      <Bell size={48} className="text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-400">Chưa có thông báo nào</p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="w-full bg-white rounded-lg shadow-md p-4 flex items-start gap-3 border border-gray-200"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          {notification.type === 'upload_success' ? (
                            <FileCheck className="text-green-600" size={20} />
                          ) : (
                            <Star className="text-yellow-400 fill-yellow-400" size={20} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-gray-800">{notification.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{notification.content}</p>
                          <p className="text-xs text-gray-400 mt-2">{notification.timestamp}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          ) : currentTab === 'config' ? (
            <>
              {/* Config Screen */}
              {!showEditProfile && !showSettings && !showChangePassword && !showAboutUs && !showReportBug ? (
                <>
                  <div className="px-4 pt-8 pb-4">
                    <h1 className="text-gray-800">Cài đặt</h1>
                  </div>

                  {/* Config Options */}
                  <div className="flex-1 px-4">
                    <div className="space-y-3">
                      {/* Edit Profile */}
                      <button
                        onClick={() => {
                          if (isGuest) {
                            alert('Vui lòng đăng nhập để sử dụng tính năng này!');
                          } else {
                            setShowEditProfile(true);
                          }
                        }}
                        className="w-full bg-white rounded-lg shadow-md p-4 flex items-center gap-3 border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <User className="text-blue-600" size={20} />
                        </div>
                        <span className="text-gray-800">Edit Profile</span>
                      </button>

                      {/* Settings */}
                      <button 
                        onClick={() => setShowSettings(true)}
                        className="w-full bg-white rounded-lg shadow-md p-4 flex items-center gap-3 border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Settings className="text-purple-600" size={20} />
                        </div>
                        <span className="text-gray-800">Setting</span>
                      </button>

                      {/* Terms */}
                      <button className="w-full bg-white rounded-lg shadow-md p-4 flex items-center gap-3 border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="text-green-600" size={20} />
                        </div>
                        <span className="text-gray-800">Điều khoản</span>
                      </button>

                      {/* Logout / Login */}
                      <button 
                        onClick={handleLogout}
                        className="w-full bg-white rounded-lg shadow-md p-4 flex items-center gap-3 border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <LogOut className="text-red-600" size={20} />
                        </div>
                        <span className="text-gray-800">{isGuest ? 'Đăng nhập' : 'Đăng xuất'}</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : showEditProfile ? (
                <>
                  {/* Edit Profile Screen */}
                  <div className="px-4 pt-8 pb-4 flex items-center gap-3">
                    <button
                      onClick={() => {
                        setShowEditProfile(false);
                        setEditingField(null);
                        setTempProfileData(profileData);
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <X size={20} className="text-gray-600" />
                    </button>
                    <h1 className="text-gray-800">Edit Profile</h1>
                  </div>

                  <div className="flex-1 px-4 overflow-y-auto pb-4">
                    {/* Avatar */}
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="text-blue-600" size={48} />
                      </div>
                    </div>

                    {/* Profile Fields */}
                    <div className="space-y-4">
                      {/* Name */}
                      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-gray-500">
                            <User size={18} />
                            <span className="text-sm">Tên</span>
                          </div>
                          {editingField !== 'name' && (
                            <button
                              onClick={() => {
                                setEditingField('name');
                                setTempProfileData(profileData);
                              }}
                              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <Edit2 size={16} className="text-blue-600" />
                            </button>
                          )}
                        </div>
                        {editingField === 'name' ? (
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={tempProfileData.name}
                              onChange={(e) => setTempProfileData({...tempProfileData, name: e.target.value})}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  setProfileData(tempProfileData);
                                  setEditingField(null);
                                }}
                                className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => {
                                  setEditingField(null);
                                  setTempProfileData(profileData);
                                }}
                                className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-800">{profileData.name}</p>
                        )}
                      </div>

                      {/* Username */}
                      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-gray-500">
                            <User size={18} />
                            <span className="text-sm">Tài khoản</span>
                          </div>
                          {editingField !== 'username' && (
                            <button
                              onClick={() => {
                                setEditingField('username');
                                setTempProfileData(profileData);
                              }}
                              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <Edit2 size={16} className="text-blue-600" />
                            </button>
                          )}
                        </div>
                        {editingField === 'username' ? (
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={tempProfileData.username}
                              onChange={(e) => setTempProfileData({...tempProfileData, username: e.target.value})}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  setProfileData(tempProfileData);
                                  setEditingField(null);
                                }}
                                className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => {
                                  setEditingField(null);
                                  setTempProfileData(profileData);
                                }}
                                className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-800">{profileData.username}</p>
                        )}
                      </div>

                      {/* Major */}
                      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-gray-500">
                            <BookOpen size={18} />
                            <span className="text-sm">Ngành</span>
                          </div>
                          {editingField !== 'major' && (
                            <button
                              onClick={() => {
                                setEditingField('major');
                                setTempProfileData(profileData);
                              }}
                              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <Edit2 size={16} className="text-blue-600" />
                            </button>
                          )}
                        </div>
                        {editingField === 'major' ? (
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={tempProfileData.major}
                              onChange={(e) => setTempProfileData({...tempProfileData, major: e.target.value})}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  setProfileData(tempProfileData);
                                  setEditingField(null);
                                }}
                                className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => {
                                  setEditingField(null);
                                  setTempProfileData(profileData);
                                }}
                                className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-800">{profileData.major}</p>
                        )}
                      </div>

                      {/* Registration Date (no edit) */}
                      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                          <Calendar size={18} />
                          <span className="text-sm">Ngày đăng ký</span>
                        </div>
                        <p className="text-gray-800">{profileData.registrationDate}</p>
                      </div>

                      {/* Email */}
                      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Mail size={18} />
                            <span className="text-sm">Email</span>
                          </div>
                          {editingField !== 'email' && (
                            <button
                              onClick={() => {
                                setEditingField('email');
                                setTempProfileData(profileData);
                              }}
                              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <Edit2 size={16} className="text-blue-600" />
                            </button>
                          )}
                        </div>
                        {editingField === 'email' ? (
                          <div className="space-y-2">
                            <input
                              type="email"
                              value={tempProfileData.email}
                              onChange={(e) => setTempProfileData({...tempProfileData, email: e.target.value})}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  setProfileData(tempProfileData);
                                  setEditingField(null);
                                }}
                                className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => {
                                  setEditingField(null);
                                  setTempProfileData(profileData);
                                }}
                                className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-800">{profileData.email}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : showSettings && !showChangePassword && !showAboutUs && !showReportBug ? (
                <>
                  {/* Settings Screen */}
                  <div className="px-4 pt-8 pb-4 flex items-center gap-3">
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <h1 className="text-gray-800">Settings</h1>
                  </div>

                  <div className="flex-1 px-4 overflow-y-auto pb-4">
                    <div className="space-y-3">
                      {/* Change Password */}
                      <button
                        onClick={() => {
                          if (isGuest) {
                            alert('Vui lòng đăng nhập để sử dụng tính năng này!');
                          } else {
                            setShowChangePassword(true);
                          }
                        }}
                        className="w-full bg-white rounded-lg shadow-md p-4 flex items-center justify-between border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <Lock size={20} className="text-blue-600" />
                          <span className="text-gray-800">Đổi mật khẩu</span>
                        </div>
                        <ChevronLeft size={20} className="text-gray-400 rotate-180" />
                      </button>

                      {/* Dark Mode Toggle */}
                      <div className="w-full bg-white rounded-lg shadow-md p-4 flex items-center justify-between border border-gray-200">
                        <div className="flex items-center gap-3">
                          <Settings size={20} className="text-purple-600" />
                          <span className="text-gray-800">Chế độ màn hình</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-sm">{darkMode ? 'Tối' : 'Sáng'}</span>
                          <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`relative w-14 h-8 rounded-full transition-colors ${
                              darkMode ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                          >
                            <div
                              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                                darkMode ? 'translate-x-6' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Report Bug */}
                      <button
                        onClick={() => setShowReportBug(true)}
                        className="w-full bg-white rounded-lg shadow-md p-4 flex items-center justify-between border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <AlertCircle size={20} className="text-orange-600" />
                          <span className="text-gray-800">Report lỗi</span>
                        </div>
                        <ChevronLeft size={20} className="text-gray-400 rotate-180" />
                      </button>

                      {/* About Us */}
                      <button
                        onClick={() => setShowAboutUs(true)}
                        className="w-full bg-white rounded-lg shadow-md p-4 flex items-center justify-between border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <Info size={20} className="text-green-600" />
                          <span className="text-gray-800">About Us</span>
                        </div>
                        <ChevronLeft size={20} className="text-gray-400 rotate-180" />
                      </button>

                      {/* App Version */}
                      <div className="w-full bg-white rounded-lg shadow-md p-4 flex items-center justify-between border border-gray-200">
                        <div className="flex items-center gap-3">
                          <FileCheck size={20} className="text-gray-600" />
                          <span className="text-gray-800">App Version</span>
                        </div>
                        <span className="text-gray-500">1.0.0</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : showChangePassword ? (
                <>
                  {/* Change Password Screen */}
                  <div className="px-4 pt-8 pb-4 flex items-center gap-3">
                    <button
                      onClick={() => {
                        setShowChangePassword(false);
                        setChangePasswordForm({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <h1 className="text-gray-800">Đổi mật khẩu</h1>
                  </div>

                  <div className="flex-1 px-4 overflow-y-auto pb-4">
                    <div className="space-y-4">
                      {/* Current Password */}
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">Mật khẩu hiện tại</label>
                        <input
                          type="password"
                          value={changePasswordForm.currentPassword}
                          onChange={(e) => setChangePasswordForm({...changePasswordForm, currentPassword: e.target.value})}
                          placeholder="Nhập mật khẩu hiện tại"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                        />
                      </div>

                      {/* New Password */}
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">Mật khẩu mới</label>
                        <input
                          type="password"
                          value={changePasswordForm.newPassword}
                          onChange={(e) => setChangePasswordForm({...changePasswordForm, newPassword: e.target.value})}
                          placeholder="Nhập mật khẩu mới"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                        />
                      </div>

                      {/* Confirm New Password */}
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">Nhập lại mật khẩu mới</label>
                        <input
                          type="password"
                          value={changePasswordForm.confirmNewPassword}
                          onChange={(e) => setChangePasswordForm({...changePasswordForm, confirmNewPassword: e.target.value})}
                          placeholder="Nhập lại mật khẩu mới"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                        />
                      </div>

                      {/* Change Password Button */}
                      <button
                        onClick={handleChangePassword}
                        className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-6"
                      >
                        Đổi mật khẩu
                      </button>
                    </div>
                  </div>
                </>
              ) : showAboutUs ? (
                <>
                  {/* About Us Screen */}
                  <div className="px-4 pt-8 pb-4 flex items-center gap-3">
                    <button
                      onClick={() => setShowAboutUs(false)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <X size={20} className="text-gray-600" />
                    </button>
                    <h1 className="text-gray-800">About Us</h1>
                  </div>

                  <div className="flex-1 px-4 overflow-y-auto pb-4">
                    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 space-y-4">
                      {/* App Logo/Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center">
                          <FileText size={40} className="text-white" />
                        </div>
                      </div>

                      <div>
                        <h2 className="text-blue-600 text-center mb-2">My App</h2>
                        <p className="text-gray-500 text-center text-sm mb-4">Ứng dụng quản lý tài liệu</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          My App là một ứng dụng quản lý và chia sẻ tài liệu học tập, giúp sinh viên dễ dàng tổ chức, 
                          tìm kiếm và truy cập các tài liệu học tập của mình một cách hiệu quả.
                        </p>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-gray-800 mb-3">Thông tin liên lạc</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail size={16} className="text-blue-600" />
                            <span className="text-gray-700">Email: support@myapp.com</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe size={16} className="text-blue-600" />
                            <span className="text-gray-700">Website: www.myapp.com</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-gray-800 mb-3">Thông tin phát triển</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>Phiên bản: 1.0.0</p>
                          <p>Ngày phát hành: 02/11/2025</p>
                          <p>Nhà phát triển: My App Team</p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-500 text-xs text-center">
                          © 2025 My App. All rights reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : showReportBug ? (
                <>
                  {/* Report Bug Screen */}
                  <div className="px-4 pt-8 pb-4 flex items-center gap-3">
                    <button
                      onClick={() => setShowReportBug(false)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <h1 className="text-gray-800">Report lỗi</h1>
                  </div>

                  <div className="flex-1 px-4 overflow-y-auto pb-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">Tiêu đề</label>
                        <input
                          type="text"
                          placeholder="Mô tả ngắn gọn lỗi"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm mb-2">Mô tả chi tiết</label>
                        <textarea
                          placeholder="Mô tả chi tiết về lỗi bạn gặp phải..."
                          rows={6}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800 resize-none"
                        />
                      </div>

                      <button
                        onClick={() => {
                          alert('Cảm ơn bạn đã báo cáo lỗi! Chúng tôi sẽ xem xét và khắc phục sớm nhất.');
                          setShowReportBug(false);
                        }}
                        className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Gửi báo cáo
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </>
          ) : null}

          {/* Filter Modal */}
          {showFilterModal && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end z-50">
              <div className="bg-white rounded-t-3xl w-full h-[80%] p-6 flex flex-col">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-800">Lọc tài liệu</h2>
                  <button
                    onClick={handleCloseFilter}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>
                </div>

                {/* Filter Content */}
                <div className="flex-1 space-y-6 overflow-y-auto">
                  {/* Tag Filter */}
                  <div>
                    <label className="text-gray-700 mb-2 block">Tag</label>
                    <button
                      onClick={() => setShowTagOptions(!showTagOptions)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-left text-gray-800"
                    >
                      {tempTag || 'Chọn tag...'}
                    </button>
                    {showTagOptions && (
                      <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                        <button
                          onClick={() => {
                            setTempTag('');
                            setShowTagOptions(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-500"
                        >
                          Không chọn
                        </button>
                        {tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => {
                              setTempTag(tag);
                              setShowTagOptions(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                              tempTag === tag ? 'bg-blue-50 text-blue-600' : 'text-gray-800'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Course Code Filter */}
                  <div>
                    <label className="text-gray-700 mb-2 block">Mã môn học</label>
                    <input
                      type="text"
                      placeholder="Ví dụ: CO3035, MH1001..."
                      value={tempCourseCode}
                      onChange={(e) => setTempCourseCode(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                    />
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <label className="text-gray-700 mb-2 block">Rating tối thiểu</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setTempRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            size={32}
                            className={
                              star <= tempRating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }
                          />
                        </button>
                      ))}
                      {tempRating > 0 && (
                        <button
                          onClick={() => setTempRating(0)}
                          className="ml-2 text-sm text-gray-500 hover:text-gray-700"
                        >
                          Xóa
                        </button>
                      )}
                    </div>
                    {tempRating > 0 && (
                      <p className="text-sm text-gray-500 mt-2">
                        Hiển thị tài liệu có {tempRating} sao trở lên
                      </p>
                    )}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={handleCancelFilter}
                    className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Hủy lọc
                  </button>
                  <button
                    onClick={handleApplyFilter}
                    className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom navigation with 4 buttons */}
          {!viewingFile && authScreen === 'app' && (
            <div className="relative flex items-center justify-around px-6 py-4 bg-white border-t border-gray-200">
              {/* Add button floating on top of border */}
              <button 
                onClick={handleAddClick}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-colors"
              >
                <Plus size={28} />
              </button>
              
              <button 
                onClick={() => {
                  setCurrentTab('storage');
                  setShowSearch(false);
                  setSearchQuery('');
                }}
                className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                  currentTab === 'storage' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
                }`}
              >
                <HardDrive size={24} />
                <span className="text-xs">Storage</span>
              </button>
              
              <button 
                onClick={() => {
                  setCurrentTab('upload');
                  setShowSearch(false);
                  setSearchQuery('');
                }}
                className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                  currentTab === 'upload' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
                }`}
              >
                <Upload size={24} />
                <span className="text-xs">Upload</span>
              </button>
              
              <button 
                onClick={() => {
                  setCurrentTab('notification');
                  setShowSearch(false);
                  setSearchQuery('');
                }}
                className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                  currentTab === 'notification' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
                }`}
              >
                <Bell size={24} />
                <span className="text-xs">Notification</span>
              </button>
              
              <button 
                onClick={() => {
                  setCurrentTab('config');
                  setShowSearch(false);
                  setSearchQuery('');
                }}
                className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                  currentTab === 'config' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
                }`}
              >
                <Settings size={24} />
                <span className="text-xs">Config</span>
              </button>
            </div>
          )}
        </div>

        {/* File Viewer */}
        {viewingFile && (
          <div className="absolute inset-0 bg-white z-40">
            {/* File Viewer Header */}
            <div className="flex items-center justify-between px-4 pt-8 pb-4 border-b border-gray-200">
              <button
                onClick={handleCloseFile}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <h2 className="text-gray-800 truncate max-w-[200px]">{viewingFile.name}</h2>
              <button
                onClick={() => setShowFileMenu(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Menu size={24} className="text-gray-600" />
              </button>
            </div>

            {/* File Content */}
            <div className="h-[calc(100%-80px)] bg-gray-50 flex items-center justify-center">
              <div className="text-center p-8">
                <FileText size={64} className="text-blue-500 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">{viewingFile.name}</p>
                <p className="text-sm text-gray-400">Xem trước tài liệu</p>
                {userTags[viewingFile.id] && userTags[viewingFile.id].length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {userTags[viewingFile.id].map((tag, index) => (
                      <span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* File Menu Modal */}
        {showFileMenu && viewingFile && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end z-50">
            <div className="bg-white rounded-t-3xl w-full h-[80%] p-6 flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-800">Tùy chọn</h2>
                <button
                  onClick={() => setShowFileMenu(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Menu Options */}
              <div className="flex-1 space-y-3">
                {/* Option 1: Thông tin */}
                <button
                  onClick={() => {
                    setShowFileMenu(false);
                    setShowFileInfo(true);
                  }}
                  className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Info size={24} className="text-blue-600" />
                  <span className="text-gray-800">Thông tin</span>
                </button>

                {/* Option 2: Add to Storage */}
                <button
                  onClick={handleAddToStorage}
                  className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <HardDrive size={24} className="text-green-600" />
                  <span className="text-gray-800">Add to Storage</span>
                </button>

                {/* Option 3: Download */}
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Download size={24} className="text-purple-600" />
                  <span className="text-gray-800">Download</span>
                </button>

                {/* Option 4: Add Tag */}
                <button
                  onClick={() => {
                    setShowFileMenu(false);
                    setShowAddTag(true);
                  }}
                  className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Tag size={24} className="text-orange-600" />
                  <span className="text-gray-800">Add Tag</span>
                </button>

                {/* Option 5: Rate */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <Star size={24} className="text-yellow-400" />
                    <span className="text-gray-800">Đánh giá</span>
                  </div>
                  <div className="flex items-center gap-2 ml-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRateFile(star)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={28}
                          className={
                            star <= (userRatings[viewingFile.id] || 0)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }
                        />
                      </button>
                    ))}
                  </div>
                  {userRatings[viewingFile.id] && (
                    <p className="text-sm text-gray-500 mt-2 ml-10">
                      Bạn đã đánh giá: {userRatings[viewingFile.id]} sao
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* File Info Modal */}
        {showFileInfo && viewingFile && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end z-50">
            <div className="bg-white rounded-t-3xl w-full h-[80%] p-6 flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-800">Thông tin tài liệu</h2>
                <button
                  onClick={() => setShowFileInfo(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* File Info Content */}
              <div className="space-y-4">
                <div>
                  <label className="text-gray-500 text-sm">Tên tài liệu</label>
                  <p className="text-gray-800 mt-1">{viewingFile.name}</p>
                </div>
                <div>
                  <label className="text-gray-500 text-sm">Tag</label>
                  <p className="text-gray-800 mt-1">{viewingFile.tag}</p>
                </div>
                <div>
                  <label className="text-gray-500 text-sm">Mã môn học</label>
                  <p className="text-gray-800 mt-1">{viewingFile.courseCode}</p>
                </div>
                <div>
                  <label className="text-gray-500 text-sm">Đánh giá trung bình</label>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-800">{viewingFile.rating}</span>
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  </div>
                </div>
                {userTags[viewingFile.id] && userTags[viewingFile.id].length > 0 && (
                  <div>
                    <label className="text-gray-500 text-sm">Tag của bạn</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {userTags[viewingFile.id].map((tag, index) => (
                        <span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Add Tag Modal */}
        {showAddTag && viewingFile && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end z-50">
            <div className="bg-white rounded-t-3xl w-full h-[80%] p-6 flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-800">Thêm Tag</h2>
                <button
                  onClick={() => {
                    setShowAddTag(false);
                    setShowNewTagInput(false);
                    setNewTagInput('');
                  }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Tag Options */}
              <div className="flex-1 overflow-y-auto">
                <div className="space-y-2 mb-4">
                  <h3 className="text-sm text-gray-500 mb-2">Tag có sẵn</h3>
                  {availableUserTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        handleAddUserTag(tag);
                        setShowAddTag(false);
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-left transition-colors ${
                        userTags[viewingFile.id]?.includes(tag)
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      {tag}
                      {userTags[viewingFile.id]?.includes(tag) && (
                        <span className="ml-2 text-xs">✓</span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Add New Tag */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h3 className="text-sm text-gray-500 mb-2">Tạo tag mới</h3>
                  {!showNewTagInput ? (
                    <button
                      onClick={() => setShowNewTagInput(true)}
                      className="w-full px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      + Tạo tag mới
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Nhập tên tag..."
                        value={newTagInput}
                        onChange={(e) => setNewTagInput(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleAddNewTag}
                          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          Thêm
                        </button>
                        <button
                          onClick={() => {
                            setShowNewTagInput(false);
                            setNewTagInput('');
                          }}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Hủy
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upload File Modal */}
        {showUploadModal && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end z-50">
            <div className="bg-white rounded-t-3xl w-full h-[80%] p-6 flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-800">Upload tài liệu mới</h2>
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    setNewFileName('');
                    setNewFileTag('');
                    setNewFileCourseCode('');
                    setShowNewFileTagOptions(false);
                  }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Upload Form */}
              <div className="flex-1 space-y-6 overflow-y-auto">
                {/* File Name */}
                <div>
                  <label className="text-gray-700 mb-2 block">Tên tài liệu *</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Bài giảng tuần 1.pdf"
                    value={newFileName}
                    onChange={(e) => setNewFileName(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                  />
                </div>

                {/* Tag */}
                <div>
                  <label className="text-gray-700 mb-2 block">Tag *</label>
                  <button
                    onClick={() => setShowNewFileTagOptions(!showNewFileTagOptions)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-left text-gray-800"
                  >
                    {newFileTag || 'Chọn tag...'}
                  </button>
                  {showNewFileTagOptions && (
                    <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                      {tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setNewFileTag(tag);
                            setShowNewFileTagOptions(false);
                          }}
                          className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                            newFileTag === tag ? 'bg-blue-50 text-blue-600' : 'text-gray-800'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Course Code */}
                <div>
                  <label className="text-gray-700 mb-2 block">Mã môn học *</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: CO3035, MH1001..."
                    value={newFileCourseCode}
                    onChange={(e) => setNewFileCourseCode(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-gray-800"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700">
                    💡 File sẽ được thêm vào danh s��ch "Upload" của bạn sau khi upload thành công.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    setNewFileName('');
                    setNewFileTag('');
                    setNewFileCourseCode('');
                    setShowNewFileTagOptions(false);
                  }}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={handleUploadFile}
                  className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
