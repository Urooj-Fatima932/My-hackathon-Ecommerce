'use client'
import Button from "@/components/Button";
import Link from "next/link";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import Image from "next/image";
import {Input} from "@/components/ui/input";


function ContactUs() {
    return (
        <main>
            <div className="w-[93%] mx-auto">
                <div className="wrapper text-[#111111] text-sm">
                    <section className="get-help text-center mt-5 ">
                        <h1 className="text-4xl font-semibold">GET HELP</h1>
                        <div className="w-[400px] flex mx-auto mt-5">
                        <Input
                        type="text"
                        placeholder="What can we help you with?"
                        />
                        </div>
                    </section>
                    <section className="grid grid-cols-1 lg:grid-cols-[75%_25%] gap-6">
                        <div className="p-4 sm:p-12 text-lg">
                            <h1 className="text-2xl font-[800] mb-8">
                                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
                            </h1>
                            <p>
                                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
                            </p>
                            <ul className="w-full sm:w-[85%] mx-auto py-6 flex flex-col gap-4">
                                <li>
                                    <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                                </li>
                                <li>
                                    <p>
                                        If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
                                    </p>
                                </li>
                                <li>
                                    <Link href="#" className="underline">Apple Pay</Link>
                                </li>
                            </ul>
                            <p>
                                <Link href="#" className="underline">Nike Members</Link> can store multiple debit or credit cards in their profile for faster checkout. If you are not already a Member,{" "}
                                <Link href="" className="underline">join us</Link> today.
                            </p>
                            <div className="mt-5 flex flex-col sm:flex-row gap-3">
                                <Button text="JOIN US" />
                                <Button text="SHOP NIKE" />
                            </div>
                            {/* FAQs Section */}
                            <div className="FAQS my-5">
                                <h1 className="text-2xl font-[800] mb-4">FAQS</h1>
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <h3 className="font-semibold">Does my card need international purchases enabled?</h3>
                                        <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                                    </div>
                                    <p>Please note, some banks may charge a small transaction fee for international orders.</p>
                                    <div>
                                        <h3 className="font-semibold">Can I pay for my order with multiple methods?</h3>
                                        <p> No, payment for Nike orders can not be split between multiple payment methods.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">What payment method is accepted for SNKRS orders?</h3>
                                        <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Why dont I see Apple Pay as an option?</h3>
                                        <p>
                                            To see Apple Pay as an option in the Nike App or on Nike.com, you will need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet.
                                            Additionally, you will need to use Safari to use Apple Pay on Nike.com.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Review Section */}
                            <div className="review flex flex-col gap-2">
                                <p>Was this answer helpful?</p>
                                <div className="flex gap-3">
                                    <ThumbsUp /> <ThumbsDown />
                                </div>
                                <p className="text-[#757575]">RELATED</p>
                                <ul className="my-3 flex flex-col gap-3 px-5">
                                    <li className="underline">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</li>
                                    <li className="underline">HOW WILL I GET FREE DELIVERY ON NIKE ORDERS?</li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-4 sm:p-12 flex flex-col justify-start items-center gap-6 lg:gap-2">
                            <h1 className="text-2xl font-[800] text-center">CONTACT US</h1>
                            <div className="h-[90%] flex flex-col gap-10 lg:justify-evenly">
                            <div className="text-center flex flex-col items-center gap-4">
                                <Image src="/images/Phone.png" width={64} height={64} alt="mobile" />
                                <ul className="text-center">
                                    <li className="font-semibold">000 800 919 0566</li>
                                    <li>Products & Orders: 24 hours a day, 7 days a week Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</li>
                                </ul>
                            </div>
                            {/* Add other contact methods similarly */}

                            <div className="text-center flex flex-col justify-center items-center gap-4"><Image src="/images/messege.png"
    width={64}
    height={64}
    alt="notification"/>
    <ul className="text-center">
        <li className="font-semibold">24 hours a day</li>
        <li>7 Days A Week</li>
        </ul></div>


                            <div className="text-center flex flex-col justify-center items-center gap-4"><Image src="/images/envelope.png"
    width={64}
    height={64}
    alt="envelope"/>
    <ul className="text-center">
        <li className="font-semibold">We&apos;ll reply within</li>
        <li>five business days</li>
        </ul></div>
    
        <div className="text-center flex flex-col justify-center items-center gap-4"><Image src="/images/baloon.png"
    width={64}
    height={64}
    alt="baloon"/>
    <ul className="text-center">
        <li className="font-semibold">STORE LOCATOR</li>
        <li>Find Nike retail stores near you</li>
        </ul></div>
        </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
export default ContactUs;
