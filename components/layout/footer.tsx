import { footNavLinks } from "@/data/footNavData";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        fontFamily:
          "SF Pro Text, Myriad Set Pro, SF Pro Icons, Apple Legacy Chevron, Helvetica Neue, Helvetica, Arial, sans-serif",
        minWidth: 1024,
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
        fontSynthesis: "none",
        WebkitFontSmoothing: "antialiased",
        textAlign: "start",
        textSizeAdjust: "100%",
      }}
      className="text-gray-600 body-font   bg-[#f5f5f7]"
    >
      <nav className=" flex items-center gap-5 pt-[0.8rem] justify-between container mx-auto max-w-[1024px]">
        <ul
          className="footer"
          style={{
            float: "inherit",
            fontSize: "1em",
            fontFamily: "inherit",
            fontWeight: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit",
            textAlign: "inherit",
          }}
        >
          <li>
            * Available for Qualified Purchasers only. Qualified Purchasers
            receive an Apple Gift Card when they purchase an Eligible Product at
            a Qualifying Location through September 30, 2024. Gift card values
            may vary by Eligible Product. Only one Apple Gift Card per Eligible
            Product per Qualified Purchaser. Offer subject to availability.
            While supplies last. Qualified Purchasers shall receive a discount
            equal to the value of the Apple Gift Card off the price of the
            Eligible Product, but will be charged for all items in their cart,
            including the Apple Gift Card. Important notice regarding the
            checkout receipt and monthly statement for Apple Card Monthly
            Installments (ACMI) purchases with this promotion: Qualified
            Purchasers selecting ACMI (a 0% APR payment option available only in
            the U.S.) as payment type at checkout shall receive a discount equal
            to the value of the Apple Gift Card off the price of the Eligible
            Product. This will result in one ACMI installment plan over 12
            months for the Eligible Product discounted by the instant credit,
            and a second ACMI installment plan over 12 months for the full price
            of the Apple Gift Card. The total combined amount charged over the
            two separate ACMI installment plans will reflect the original full
            retail price of the Eligible Product. Separately, Qualified
            Purchasers will receive and be charged for the Apple Gift Card in
            the amount of the applicable discount off the Eligible Product.
            Apple Card Monthly Installments (ACMI) is a 0% APR payment option
            that is only available if you select it at checkout in the U.S. for
            eligible products purchased at Apple Store locations, apple.com, the
            Apple Store app, or by calling 1-800-MY-APPLE, and is subject to
            credit approval and credit limit. See support.apple.com/kb/HT211204
            for more information about eligible products. APR ranges may vary
            based on when you accepted an Apple Card. Cardholders who accept an
            Apple Card on and or after February 1, 2024: Variable APRs for Apple
            Card, other than ACMI, range from 19.24% to 29.49% based on
            creditworthiness. Rates as of February 1, 2024. Existing
            cardholders: See your Customer Agreement for applicable rates and
            fee. If you buy an ACMI-eligible product by choosing to pay in full
            with Apple Card (instead of using ACMI), that purchase is subject to
            the Apple Card variable APR, not 0% APR. Taxes and shipping on ACMI
            purchases are subject to the variable APR, not 0% APR. When you buy
            an iPhone with ACMI, you’ll need to select AT&T, T-Mobile, or
            Verizon as your carrier when you check out. An iPhone purchased with
            ACMI is always unlocked, so you can switch carriers at any time.
            ACMI is not available for purchases made online at the following
            special stores: Apple Employee Purchase Plan; participating
            corporate Employee Purchase Programs; Apple at Work for small
            businesses; Government and Veterans and Military Purchase Programs;
            or on refurbished devices. The last month’s payment for each product
            will be the product’s purchase price, less all other payments at the
            monthly payment amount. ACMI financing is subject to change at any
            time for any reason, including but not limited to installment term
            lengths and eligible products. See support.apple.com/kb/HT211204 for
            information about upcoming changes to ACMI financing. See the Apple
            Card Customer Agreement for more information about ACMI financing.
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch. Available for qualifying applicants in the United States. If
            you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about accessing this offer or applying
            for Apple Card. This offer cannot be combined with the Apple
            Employee Purchase Plan or business loyalty pricing. Additional
            restrictions apply. View full terms and conditions of offer here.
          </li>

          <li>
            1. Apple Intelligence will be available in beta on iPhone 15 Pro,
            iPhone 15 Pro Max, and iPad and Mac with M1 and later, with Siri and
            device language set to U.S. English, as part of iOS 18, iPadOS 18,
            and macOS Sequoia this fall.
          </li>
          <li>
            2. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least 18 years old to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In-store trade-in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores, and may vary between in-store and online
            trade-in. Some stores may have additional requirements. Apple or its
            trade-in partners reserve the right to refuse or limit quantity of
            any trade-in transaction for any reason. More details are available
            from Apple’s trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply.
          </li>
          <li>
            Available in the U.S. on apple.com, in the Apple Store app, and at
            Apple Stores.
          </li>
          <li>
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch.
          </li>
          <li>
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.
          </li>
          <li>
            Learn more about how Apple Card applications are evaluated at
            support.apple.com/kb/HT209218.
          </li>
          <li>A subscription is required for Apple TV+.</li>
          <li>
            A subscription is required for Apple Arcade, Apple Fitness+, and
            Apple Music.
          </li>
        </ul>
      </nav>

      <nav className="container  mx-auto max-w-[1024px] py-10">
        <hr className=" w-full " />
        <div className=" flex gap-y-3 flex-wrap text-[12px]  leading-tight tracking-wide pt-[10px]">
          {footNavLinks.map((footNav, idx) => (
            <div key={idx} className=" w-1/5">
              {footNav.main.map((foo, idx) => (
                <div key={idx} className="pt-3">
                  <h4 className=" font-medium text-black mb-[0.8em]" key={idx}>
                    {foo.maintitle}
                  </h4>
                  {foo.childTitle.map((child, idx) => (
                    <ul key={idx} className="footNav">
                      <li className=" hover:underline inline-block cursor-pointer">
                        {child}
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </nav>
      <nav className=" container mx-auto max-w-[1024px]">
        <div className=" py-3">
          <p className=" text-[12px] ">
            More ways to shop: Find an Apple Store or other retailer near you.
            Or call 1-800-MY-APPLE.
          </p>
        </div>
        <hr className=" w-full" />
        <div className=" py-3 flex justify-between">
          <p className=" text-[12px]">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>
          <div className=" text-[12px]">
            <span className=" border-r border-[#545454] px-2 ">
              Privacy Policy
            </span>

            <span className=" border-r border-[#545454] px-2 ">
              Terms of Use
            </span>
            <span className=" border-r border-[#545454] px-2 ">
              Sales and Refunds
            </span>
            <span className=" border-r border-[#545454] px-2 ">Legal</span>
            <span className=" border-r border-[#545454] px-2 "> Site Map</span>
          </div>
          <div>
            <p className=" text-[12px]">United States</p>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
