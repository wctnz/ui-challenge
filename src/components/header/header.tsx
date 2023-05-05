
import SvgGuideDao from "./assets/logo.icon";

export const Header = () => {
    return (
        <div className="flex items-center">
            <div className="pr-6">
            <SvgGuideDao />
            </div>
            <div className="hidden lg:block text-[15px] leading-[20px] border-l border-solid border-day-150 uppercase pl-6">Sandbox</div>
        </div>
    );
};  