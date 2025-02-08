import { Separator } from "@/components/ui/separator"
import Image from "next/image"
function TopHeader(){
    return (
        <main className="h-[33px] bg-bgray w-screen flex items-center justify-center">
            <div className="w-[93%] flex justify-between items-center">
                <div>
                    <Image src="/images/jordan.png" alt="logo" width={28} height={28} />
                </div>
            <div className="flex h-5 items-center space-x-4 text-xs font-semibold">
        <div>Find a store</div>
        <Separator orientation="vertical" />
        <div>Help</div>
        <Separator orientation="vertical" />
        <div>Join us</div>
        <Separator orientation="vertical" />
        <div>Signin</div>
      </div>
            </div>
        </main>
    )
}
export default TopHeader;