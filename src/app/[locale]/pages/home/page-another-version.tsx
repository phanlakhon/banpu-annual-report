import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageOrder, pagesData } from "@/data/pages";

type Props = { params: Promise<{ locale: string }> };

export default async function PagesHomePage({ params }: Props) {
    const { locale } = await params;
    const isEn = locale === "en";

    return (
        <div className="w-full bg-[#f0f8ff] min-h-screen flex flex-col items-center">
            {/* The report pages container - simulating a 2-page vertical spread */}
            <div className="relative w-full mx-auto bg-white shadow-2xl overflow-hidden my-8">

                {/* Background image for the whole spread */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-bottom z-0"
                    style={{
                        backgroundImage: "url('/banpu-background.png')",
                        backgroundSize: '100% auto'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full flex flex-col">

                    {/* --- PAGE 02 --- */}
                    <div className="relative w-full min-h-[1050px] px-12 md:px-20 pt-16 pb-12 flex flex-col">

                        {/* Top menu bar */}
                        <div className="flex items-center gap-4 text-[11px] text-gray-500 mb-32">
                            <div className="opacity-70">
                                <Image src="/logo.png" alt="Logo" width={18} height={18} className="object-contain" />
                            </div>
                            <div className="flex items-center gap-2 font-medium">
                                <span>การประกอบธุรกิจและผลการดำเนินงาน</span>
                                <span className="text-gray-300">|</span>
                                <span>การกำกับดูแลกิจการ</span>
                                <span className="text-gray-300">|</span>
                                <span>การรับรองความถูกต้องของข้อมูล</span>
                            </div>
                        </div>

                        {/* Center Title */}
                        <div className="flex-1 flex flex-col items-center justify-start text-center mt-12">
                            <div className="mb-12">
                                <h1 className="text-5xl md:text-[72px] font-bold leading-[1.15] text-gradient-banpu mb-8 tracking-tight">
                                    สมดุลพลังงานปูทางสู่อนาคต
                                </h1>
                                <h2 className="text-2xl md:text-[28px] text-[#5b3e96] font-medium leading-snug">
                                    Paving the Wayto a Sustainable Future
                                </h2>
                            </div>

                            <p className="max-w-3xl text-[15px] md:text-[16px] text-[#1a365d] leading-[1.8] text-center mt-8">
                                บริษัท บ้านปู จำกัด (มหาชน) ผู้นำด้านพลังงานที่หลากหลาย ขับเคลื่อนการสร้าง <span className="text-[#29AEEF] font-bold">“สมดุลพลังงาน”</span>
                                ซึ่งหมายถึง <span className="text-[#29AEEF] font-bold">พลังงานที่มีความเสถียร เข้าถึงได้ในราคาที่เหมาะสม และเป็นมิตรต่อสิ่งแวดล้อม</span>
                                ภายใต้กลยุทธ์ <span className="text-[#29AEEF] font-bold">“Energy Symphonics”</span> ที่เน้นการผสานพลังงานที่หลากหลายอย่างสมดุล
                                เพื่อรองรับการเปลี่ยนผ่านสู่ธุรกิจพลังงานที่ยั่งยืน รวมถึงสร้างมูลค่าเพิ่มให้ห่วงโซ่ธุรกิจ
                                เพื่อส่งมอบคุณค่าระยะยาวแก่ผู้มีส่วนได้เสียทุกกลุ่ม
                            </p>
                        </div>


                    </div>

                    {/* --- PAGE 03 --- */}
                    <div className="relative w-full min-h-[1050px] px-12 md:px-20 pt-16 pb-12 flex flex-col">

                        {/* Top right text */}
                        <div className="text-right text-[11px] text-[#29AEEF] mb-20 font-medium">
                            รายงานประจำปี 2568 แบบแสดงรายการข้อมูลประจำปี (แบบ 56-1 One Report) <span className="font-bold">บริษัท บ้านปู จำกัด (มหาชน)</span>
                        </div>

                        {/* Two column layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 text-[15px] text-[#1a365d]">
                            {/* Left Column */}
                            <div className="space-y-6 leading-[1.85]">
                                <p>
                                    นับตั้งแต่เริ่มดำเนินกลยุทธ์ Energy Symphonics ในเดือน
                                    พฤศจิกายน 2567 บ้านปูได้ขับเคลื่อนธุรกิจตามกลยุทธ์
                                    ที่วางไว้อย่างต่อเนื่อง โดยหนึ่งในความสำเร็จในเฟสหนึ่ง
                                    คือการผลักดัน BKV Corporation (BKV) บริษัทย่อย
                                    ที่ดำเนินธุรกิจก๊าซธรรมชาติและโครงการดักจับและ
                                    กักเก็บก๊าซคาร์บอนไดออกไซด์ (CCUS) ในสหรัฐอเมริกา
                                    เข้าจดทะเบียนในตลาดหลักทรัพย์นิวยอร์ก (NYSE)
                                    ควบคู่กับการเดินหน้าขยายการลงทุนในธุรกิจพลังงาน
                                    แห่งอนาคต อาทิ โครงการระบบกักเก็บพลังงานด้วย
                                    แบตเตอรี่ ในประเทศออสเตรเลียและญี่ปุ่น เพื่อเสริม
                                    ความแข็งแกร่งของพอร์ตโฟลิโอธุรกิจ รวมถึงขับเคลื่อน
                                    การบรรลุเป้าหมายการปล่อยก๊าซเรือนกระจกสุทธิเป็นศูนย์
                                    (Net Zero) ภายในปี 2593
                                </p>
                                <p>
                                    ในปัจจุบัน บ้านปูกำลังก้าวเข้าสู่เฟสสองของกลยุทธ์
                                    Energy Symphonics โดยมุ่งเน้นการปรับโครงสร้าง
                                    กลุ่มธุรกิจให้มีความคล่องตัว และสามารถสร้าง
                                    มูลค่าเพิ่มในระยะยาวได้อย่างเต็มศักยภาพ เพื่อขับเคลื่อน
                                    การสร้างสมดุลพลังงานอย่างต่อเนื่องและตอบสนอง
                                    ต่อความต้องการพลังงานแห่งอนาคต
                                </p>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-10 leading-[1.85]">
                                <p className="font-medium">
                                    บ้านปูเชื่อว่าการปรับโครงสร้างใหม่นี้จะสามารถสร้างคุณค่า
                                    ให้กลุ่มบริษัทฯ อย่างมีนัยสำคัญ ได้แก่
                                </p>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-[17px] font-bold text-[#29AEEF] mb-3 pb-3 border-b-[1.5px] border-white">ด้านโครงสร้าง</h3>
                                        <p>ทำให้แต่ละธุรกิจหลักมีความชัดเจน โดยมีการกำกับดูแลกิจการที่มีประสิทธิภาพเป็นกลไกสนับสนุน</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[17px] font-bold text-[#29AEEF] mb-3 pb-3 border-b-[1.5px] border-white">ด้านกลยุทธ์</h3>
                                        <p>สร้างโอกาสในการเติบโตและเพิ่มประสิทธิภาพการบริหารสินทรัพย์ ซึ่งเป็นตัวเร่งการเติบโตและการลดการปล่อยก๊าซคาร์บอนไดออกไซด์</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[17px] font-bold text-[#29AEEF] mb-3 pb-3 border-b-[1.5px] border-white">ด้านการเงิน</h3>
                                        <p>ช่วยสะท้อนมูลค่าที่แท้จริงของสินทรัพย์ในตลาดและสร้างความแข็งแกร่งให้กับสถานะทางการเงินของกลุ่มบริษัทฯ พร้อมสำหรับโอกาสการเติบโตใหม่ ๆ</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
