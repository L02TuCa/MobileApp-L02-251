import svgPaths from "./svg-svkvdgwod6";

function InterfacesLogo() {
  return (
    <div
      className="aspect-[24/24] basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Interfaces Logo"
    >
      <div
        className="absolute aspect-[24/16] left-0 right-0 translate-y-[-50%]"
        data-name="Union"
        style={{ top: "calc(50% + 0.3px)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 33 22"
        >
          <g id="Union">
            <path
              d={svgPaths.p15853b70}
              fill="var(--fill-0, #FAFAFA)"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
            <path
              d={svgPaths.p35081d00}
              fill="var(--fill-0, #FAFAFA)"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
            <path
              d={svgPaths.p1a3cd600}
              fill="var(--fill-0, #FAFAFA)"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative shrink-0 size-[33px]"
      data-name="Logo"
    >
      <InterfacesLogo />
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-2 py-0 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['Lexend:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[23.1px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[33px] whitespace-pre">
          Interfaces Design System
        </p>
      </div>
    </div>
  );
}

function BrandInfo() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Brand Info"
    >
      <Logo />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['Lexend:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[19.8px] text-left text-neutral-400 text-nowrap">
        <p className="block leading-[26.4px] whitespace-pre">
          https://interfaces.supply
        </p>
      </div>
    </div>
  );
}

function LinkInfo() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[13.2px] items-center justify-start p-0 relative shrink-0"
      data-name="Link Info"
    >
      <Content1 />
    </div>
  );
}

function FooterContent() {
  return (
    <div
      className="absolute bottom-[39.6px] box-border content-stretch flex flex-col items-start justify-start left-[39.6px] p-[8px]"
      data-name="Footer Content"
    >
      <BrandInfo />
      <LinkInfo />
    </div>
  );
}

function Background() {
  return (
    <div
      className="absolute bg-[#1a1a1a] box-border content-stretch flex flex-col gap-[13.2px] items-center justify-center left-0 overflow-clip p-0 size-[1320px] top-0"
      data-name="Background"
    >
      <FooterContent />
    </div>
  );
}

function InterfacesLogo1() {
  return (
    <div
      className="aspect-[24/24] basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Interfaces Logo"
    >
      <div
        className="absolute aspect-[24/16] left-0 right-0 top-1/2 translate-y-[-50%]"
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 24 16"
        >
          <g id="Union">
            <path
              d={svgPaths.p36880f80}
              fill="var(--fill-0, #FAFAFA)"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
            <path
              d={svgPaths.p355df480}
              fill="var(--fill-0, #FAFAFA)"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
            <path
              d={svgPaths.pfa0d600}
              fill="var(--fill-0, #FAFAFA)"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-10 items-center justify-center overflow-clip pl-2 pr-0 py-2 relative shrink-0 w-8"
      data-name="Logo"
    >
      <InterfacesLogo1 />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-2 py-1 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['Lexend:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Interfaces</p>
      </div>
    </div>
  );
}

function Branding() {
  return (
    <div className="relative shrink-0 w-full" data-name="Branding">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[4px] relative w-full">
          <Logo1 />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-4" data-name="Search">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Search">
          <path
            d={svgPaths.p154b5b00}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
            style={{
              fill: "color(display-p3 0.9804 0.9804 0.9804)",
              fillOpacity: "1",
            }}
          />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-8"
      data-name="Icon Wrapper"
    >
      <Search />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center pl-0 pr-2 py-1 relative w-full">
          <div className="font-['Lexend:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-neutral-400 text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-[#000000] h-10 relative rounded-lg shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-10 items-center justify-start px-1 py-0 relative w-full">
          <IconWrapper />
          <Content3 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function Search1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Search"
    >
      <Input />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-1 py-0 relative w-full">
          <Search1 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="h-10 relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-10 items-start justify-center p-[16px] relative w-full">
          <div className="font-['Lexend:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-neutral-400 text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Text content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cube() {
  return (
    <div className="relative shrink-0 size-4" data-name="Cube">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Cube">
          <path
            d={svgPaths.p5113400}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
            style={{
              fill: "color(display-p3 0.9804 0.9804 0.9804)",
              fillOpacity: "1",
            }}
          />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center pl-2 pr-0 py-0 relative shrink-0"
      data-name="Icon Wrapper"
    >
      <Cube />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-2 py-1 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['Lexend:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Text content</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-neutral-900 h-10 relative rounded-lg shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-10 items-center justify-start px-2 py-0 relative w-full">
          <IconWrapper1 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Sidebar Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[4px] relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Cube1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Cube">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Cube">
          <path
            d={svgPaths.p5113400}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
            style={{
              fill: "color(display-p3 0.9804 0.9804 0.9804)",
              fillOpacity: "1",
            }}
          />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center pl-2 pr-0 py-0 relative shrink-0"
      data-name="Icon Wrapper"
    >
      <Cube1 />
    </div>
  );
}

function Content6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-2 py-1 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['Lexend:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Text content</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-10 items-center justify-start px-2 py-0 relative w-full">
          <IconWrapper2 />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem1() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Sidebar Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[4px] relative w-full">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Flex() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="flex"
    >
      <Content4 />
      <SidebarItem />
      {[...Array(2).keys()].map((_, i) => (
        <SidebarItem1 key={i} />
      ))}
    </div>
  );
}

function Content8() {
  return (
    <div className="h-10 relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-10 items-start justify-center p-[16px] relative w-full">
          <div className="font-['Lexend:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-neutral-400 text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Text content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cube3() {
  return (
    <div className="relative shrink-0 size-4" data-name="Cube">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Cube">
          <path
            d={svgPaths.p5113400}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
            style={{
              fill: "color(display-p3 0.9804 0.9804 0.9804)",
              fillOpacity: "1",
            }}
          />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center pl-2 pr-0 py-0 relative shrink-0"
      data-name="Icon Wrapper"
    >
      <Cube3 />
    </div>
  );
}

function Content9() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-2 py-1 relative w-full">
          <div className="font-['Lexend:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Text content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-4" data-name="Chevron-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Chevron-down">
          <path
            d={svgPaths.p10dcabc0}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
            style={{
              fill: "color(display-p3 0.9804 0.9804 0.9804)",
              fillOpacity: "1",
            }}
          />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper5() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-8 items-center justify-center pl-0 pr-2 py-0 relative shrink-0"
      data-name="Icon Wrapper"
    >
      <ChevronDown />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="h-10 relative rounded-lg shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-10 items-center justify-start px-2 py-0 relative w-full">
          <IconWrapper4 />
          <Content9 />
          <IconWrapper5 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem3() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Sidebar Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[4px] relative w-full">
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Flex1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="flex"
    >
      <Content8 />
      {[...Array(3).keys()].map((_, i) => (
        <SidebarItem3 key={i} />
      ))}
    </div>
  );
}

function Menu() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Menu"
    >
      <Flex />
      {[...Array(2).keys()].map((_, i) => (
        <Flex1 key={i} />
      ))}
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-px items-start justify-start px-2 py-0 relative w-full">
          <div
            className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
            data-name="Rect"
          >
            <div
              aria-hidden="true"
              className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-4" data-name="User">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="User">
          <g id="Vector">
            <path
              d={svgPaths.p3801bf80}
              fill="#FAFAFA"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
            <path
              d={svgPaths.p2b29ce00}
              fill="#FAFAFA"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper16() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow h-8 items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Icon Wrapper"
    >
      <User />
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="bg-[#000000] relative rounded-[999px] shrink-0 size-8"
      data-name="Avatar"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative size-8">
        <IconWrapper16 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[999px]"
      />
    </div>
  );
}

function Content16() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-2 py-1 relative w-full">
          <div className="font-['Lexend:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Text content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverflowMenuHorizontal() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="Overflow-menu-horizontal"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Overflow-menu-horizontal">
          <g id="Vector">
            <path
              d={svgPaths.p29bde780}
              fill="#FAFAFA"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
            <path
              d={svgPaths.p3af0dbf2}
              fill="#FAFAFA"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
            <path
              d={svgPaths.p13593580}
              fill="#FAFAFA"
              style={{
                fill: "color(display-p3 0.9804 0.9804 0.9804)",
                fillOpacity: "1",
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-8"
      data-name="Icon Wrapper"
    >
      <OverflowMenuHorizontal />
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-md shrink-0 size-8"
      data-name="Icon Button"
    >
      <IconWrapper17 />
    </div>
  );
}

function Flex3() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="flex">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pl-2 pr-3 py-2 relative w-full">
          <Avatar />
          <Content16 />
          <IconButton />
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-end p-0 relative shrink-0 w-full"
      data-name="Settings"
    >
      <Divider />
      <Flex3 />
    </div>
  );
}

function Sidebar() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col gap-4 h-[900px] items-start justify-start overflow-clip p-[16px] relative rounded-2xl shrink-0 w-80"
      data-name="Sidebar"
    >
      <Branding />
      <Container />
      <Menu />
      <Settings />
    </div>
  );
}

export default function Frame760() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative size-full">
      <Background />
      <Sidebar />
    </div>
  );
}