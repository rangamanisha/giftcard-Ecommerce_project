import React, {useEffect} from "react";
// import "./ConditionsPage.scss";
import Header from "../HeaderPage/Header";

function ConditionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <div className="container">
        <div className="row my-4">
          <div className="col-md-8 t-col-left">
            <h3>Terms & Conditions</h3>
            <button type="button" className="btn btn-primary btn-sm">
              Last Updated: 1 January 2021
            </button>

            <hr></hr>
            <article>
              <h6 id="conwelcome">Welcome to Gifti Global</h6>
              <p className="mb-3">
                Welcome to www.giftiglobal.com (“Site”). The owner and operator
                of the site is MYLIST FZ LLC with Fujairah Media Free Zone Trade
                License registration number 1722/2011 FCC having its registered
                office at Fujairah, Fujairah Tower, United Arab Emirates (PO BOX
                334555, Dubai, United Arab Emirates) (“MyList”) a limited
                liability company registered in the United Arab Emirates
                (“UAE”).
              </p>
              <p className="mb-3">
                These terms of use and all policies and additional terms (if
                applicable) posted on the site set out the terms on which we
                offer you access to and use of our site, services and
                applications including our mobile application (collectively, the
                “Services”). You can find all of our policies and additional
                terms here: www.giftiglobal.com (“Legal Documents”).
              </p>
              <p className="mb-3">
                These legal documents are incorporated by reference into these
                Terms of Use.
              </p>
              <p className="mb-3">
                By accessing, registering and/or continuing to use or access our
                Services, you are agreeing to be bound by these Terms of Use and
                the Legal Documents with immediate effect. These Terms of Use
                and the Legal Documents are subject to change by us at any time.
                Your continued use of the Site following any such change
                constitutes your agreement to these Terms of Use and Legal
                Documents as so modified.
              </p>
              <p className="mb-4">
                References in these Terms of Use to “you” (or similar) are
                references to you as an individual or legal entity as the case
                may be.
              </p>
            </article>

            <article>
              <h6 id="conabout">ABOUT OUR SITE</h6>
              <p className="mb-3">
                The site is an e-gift cards platform that allows businesses
                individuals and enterprise to buy products.
              </p>
              <p className="mb-4">
                We reserve the right to introduce new services and update or
                withdraw any of the services, in our sole discretion, and we
                will not be liable to you for exercising this discretion.
              </p>
            </article>

            <article>
              <h6 id="coneligibilty">
                1. ELIGIBILITY AND REGISTRATION REQUIREMENTS
              </h6>
              <p className="mb-3">
                1.1. You are eligible to register as a buyer and benefit from
                the Services if you meet the following eligibility criteria:
              </p>
              <p className="ml-3 mb-3">
                1.1.1 you are above the legal age for purchasing products in
                your country of residence; and
              </p>
              <p className="ml-3 mb-3">
                1.1.2 you are able to provide a valid email address for the
                delivery of products.
              </p>
              <p className="mb-3">
                1.2. In order to register to the Site, you will need to provide
                us with certain information. Your registration to the Site may
                not be accepted if you do not provide us with the required
                information. We reserve the right to decline any registration
                without further explanation. We reserve the right to undertake
                such checks as are necessary to verify your identity.
              </p>
              <p className="mb-3">
                1.3. Once you have successfully completed registration, your
                registration shall continue for an indefinite period, subject to
                suspension or termination in accordance with clause 6 of these
                Terms of Use.
              </p>
              <p className="mb-4">
                1.4. Your information will be used for the purpose of contacting
                you in relation to your order/s. With your explicit permission,
                we may send you emails about our products and other updates. If
                after you opt-in, you change your mind, you may withdraw your
                consent for us to contact you, for the continued collection, use
                or disclosure of your information, at any time, by contacting us
                at care@giftiglobal.com.
              </p>
            </article>

            <article>
              <h6 id="conobliation">2. YOUR OBLIGATIONS</h6>
              <p className="mb-3">
                2.1. When using or accessing the Services, you agree that you:
              </p>
              <p className="ml-3 mb-3">
                2.1.1. are responsible for maintaining the confidentiality of,
                and restricting access to and use of your account and password,
                and accept responsibility for all activities that occur under
                your account and password;
              </p>
              <p className="ml-3 mb-3">
                2.1.2. agree to immediately notify us of any unauthorised use of
                your password or account or any other breach of security;
              </p>
              <p className="ml-3 mb-3">
                2.1.3. will provide true, accurate, current and complete
                information about yourself and your use of the Services as
                required by us;
              </p>
              <p className="ml-3 mb-3">
                2.1.4. will not disclose to any third party (except as required
                or requested by us) a user’s information provided to you; and
              </p>
              <p className="ml-3 mb-3">
                2.1.5. will cooperate with our requests for additional
                information with respect to your eligibility and usage of our
                Services.
              </p>
              <p className="mb-3">
                2.2. When using or accessing the Services, you agree that you
                will not:
              </p>
              <p className="ml-3 mb-3">
                2.2.1. breach or circumvent any laws, third party rights or our
                systems, policies or determinations of your account status;
              </p>
              <p className="ml-3 mb-3">
                2.2.2. use our Services if you no longer fulfil the eligibility
                criteria or are not able to form legally binding contracts, or
                are temporarily or indefinitely suspended from using our
                Services;
              </p>
              <p className="ml-3 mb-3">
                2.2.3. fail to pay for items purchased by you, unless you have a
                valid reason as set out in any of our policies;
              </p>
              <p className="ml-3 mb-3">
                2.2.4. use any stolen debit or credit cards to pay for your
                purchases;
              </p>
              <p className="ml-3 mb-3">
                2.2.5. use contact information provided to you during the course
                of a transaction on the Site to solicit additional sales offline
                or on another website;
              </p>
              <p className="ml-3 mb-3">
                2.2.6. manipulate the price of any item;
              </p>
              <p className="ml-3 mb-3">
                2.2.7. interfere with any other user’s listings;
              </p>
              <p className="ml-3 mb-3">
                2.2.8. take any action that may undermine the Site’s feedback
                and ratings systems;
              </p>
              <p className="ml-3 mb-3">
                2.2.9. post false, inaccurate, misleading, deceptive, defamatory
                or similar content;
              </p>
              <p className="ml-3 mb-3">
                2.2.10. transfer your account to another party without our prior
                written consent;
              </p>
              <p className="ml-3 mb-3">
                2.2.11. distribute or post spam, unsolicited or bulk electronic
                communications or similar;
              </p>
              <p className="ml-3 mb-3">
                2.2.12. distribute viruses or any other technologies that may
                harm our Services or the interests or property of other users;
              </p>
              <p className="ml-3 mb-3">
                2.2.13. infringe: the copyright, trademark, patent, publicity,
                moral, database, and/or other intellectual property rights
                (collectively, &quot;Intellectual Property Rights&quot; ) that
                belong to or are licensed to us; or any Intellectual Property
                Rights that belong to third parties;
              </p>
              <p className="ml-3 mb-3">
                2.2.14. harvest or otherwise collect information about users
                without their consent; or
              </p>
              <p className="ml-3 mb-3">
                2.2.15. circumvent any technical measures we use to provide the
                Services.
              </p>
            </article>

            <article>
              <h6 id="#conintellectual">3. INTELLECTUAL PROPERTY RIGHTS</h6>
              <p className="mb-3">
                3.1. Except for the rights expressly granted under these Terms
                of Use:
              </p>
              <p className="ml-3 mb-3">
                3.1.1. all content included on the Site, including but not
                limited to text, graphics, logos, images, audio clips, digital
                downloads and software is our property or the property of our
                licensors. We (or our licensors, as the case may be) retain all
                right, title and interest in and to the Site and the Services,
                including, without limitation, all Intellectual Property Rights
                therein; and
              </p>
              <p className="ml-3 mb-3">
                3.1.2. all rights, title and interest in and to any information,
                materials or other content that you provide in connection with
                your use of the Services, including all Intellectual Property
                Rights therein, will become our property.
              </p>
              <p className="mb-3">
                3.2. You agree that you have no right to use any of our
                trademarks without our prior written consent.
              </p>
              <p className="mb-3">
                3.3. All rights not expressly granted to you in these Terms of
                Use are reserved and retained by us or our licensors.
              </p>
            </article>

            <article>
              <h6 id="conwarranties">
                4. WARRANTIES, REPRESENTATIONS & UNDERTAKINGS
              </h6>
              <p className="mb-3">
                4.1. You warrant, represent and undertake that:
              </p>
              <p className="ml-3 mb-3">
                4.1.1. you shall fully comply and will at all times continue to
                fully comply with all applicable laws, statutes and regulations,
                including, without limitation, all privacy laws and content
                regulation;
              </p>
              <p className="ml-3 mb-3">
                4.1.2. you have full power and authority to enter into these
                Terms of Use and the execution and performance of your
                obligations under these Terms of Use does not conflict with:
              </p>
              <p>
                <ul>
                  <li>
                    any laws, rules, regulations or governmental guidelines to
                    which you are subject to; or
                  </li>
                  <li>
                    any other agreements to which you are a party to or to which
                    you are otherwise bound by;
                  </li>
                </ul>
              </p>
              <p className="ml-3 mb-3">
                4.1.3. if you create or use an account on behalf of a business
                entity, you represent that you are authorised to act on behalf
                of such business and bind the business to these Terms of Use.
                Such account is deemed to be owned and controlled by the
                business entity;
              </p>
              <p className="mb-3">
                4.2. Subject to clause ‎5.1, the Services are provided to you on
                an “as is” basis without representations, warranties or
                conditions of any kind. We disclaim all warranties, conditions
                and representations of any kind, whether express, implied or
                collateral, including, but not limited to, all conditions,
                representations or warranties of merchantability, of fitness for
                a particular or general purpose, of non-infringement, of
                compatibility or that the Services are secure or error free or
                will operate without interruption or will be provided in a
                timely or proper manner or at all.
              </p>
              <p className="mb-4">
                4.3. Furthermore, whilst we attempt to be as accurate as
                possible, we do not warrant that product descriptions or other
                content of any Service is accurate, complete, reliable, current,
                or error-free. Additionally, as a buyer, you agree that we are
                not responsible for examining or warranting the listings or
                content provided by us or third parties through the Services,
                and that you will not attempt to hold us liable for any
                inaccuracies or defects in any of the listings.
              </p>
            </article>

            <article>
              <h6 id="conliability">5. LIABILITY & INDEMNITIES</h6>
              <p className="mb-3">
                5.1. Nothing in these Terms of Use shall limit or exclude a
                party’s liability:
              </p>
              <p className="ml-3 mb-3">
                5.1.1. for fraud, including fraudulent misrepresentation,
                perpetrated by that party;
              </p>
              <p className="ml-3 mb-3">
                5.1.2. for death or personal injury caused by the negligence of
                that party; or
              </p>
              <p className="ml-3 mb-3">
                5.1.3. for any other liability that cannot be limited or
                excluded under applicable law.
              </p>
              <p className="mb-3">
                5.2. Subject to clause ‎5.1, in no event will we, our parent
                company, subsidiaries and affiliates, and our, and their
                directors, officers, agents, employees, suppliers,
                subcontractors or licensors be liable, whether based on an
                action or claim in contract, tort, negligence, breach of
                statutory duty or otherwise arising out of or in relation to
                these Terms of Use for loss of profits, loss of data or
                information, business interruption or other pecuniary loss or
                for any special, indirect, incidental or consequential damages,
                even if we, our affiliates, directors, officers, agents,
                employees, licensors, subcontractors or suppliers have been
                advised of the possibility of such damages.
              </p>
              <p className="mb-3">
                5.3. In addition, to the extent permitted by applicable law, we
                (including our parent company, subsidiaries and affiliates and
                our, and their directors, officers, agents, employees,
                suppliers, subcontractors or licensors) are not liable, and you
                agree not to hold us responsible, for any damages or losses
                resulting directly or indirectly from:
              </p>
              <p className="ml-3 mb-3">
                5.3.1. the content or other information you provide when using
                the Services;
              </p>
              <p className="ml-3 mb-3">
                5.3.2. your use of or your inability to use our Services;
              </p>
              <p className="ml-3 mb-3">
                5.3.3. pricing, shipping, format or other guidance provided by
                us;
              </p>
              <p className="ml-3 mb-3">
                5.3.4. delays or disruptions in our Services;
              </p>
              <p className="ml-3 mb-3">
                5.3.5. viruses or other malicious software obtained by accessing
                or linking to our Services;
              </p>
              <p className="ml-3 mb-3">
                5.3.6. bugs, errors or inaccuracies of any kind in our Services;
              </p>
              <p className="ml-3 mb-3">
                5.3.7. damage to your hardware device from the use of products
                sold on the Site or our Services;
              </p>
              <p className="ml-3 mb-3">
                5.3.8. the content, actions or inactions of third parties using
                our Services;
              </p>
              <p className="ml-3 mb-3">
                5.3.9. a suspension or other action taken by us with respect to
                your use of the Services;
              </p>
              <p className="mb-3">
                5.4. Subject to clause ‎5.1, if clauses ‎5.2 or ‎5.3 are held to
                be unenforceable or inapplicable for any reason, then the total
                liability applicable to us, our parent company, subsidiaries and
                affiliates and our, and their directors, officers, agents,
                employee, suppliers, subcontractors or licensors, to you,
                whether based on an action or claim in contract, negligence or
                breach of statutory duty or otherwise, arising out of or in
                relation to these Terms of Use shall be limited to the lower of:
              </p>
              <p className="ml-3 mb-3">
                5.4.1. the price the item sold for on our Site and its original
                shipping costs; and
              </p>
              <p className="ml-3 mb-3">
                5.4.2. the amount of fees in dispute not to exceed the total
                fees that you paid to us in the twelve (12) months prior to the
                action giving rise to the liability
              </p>
              <p className="mb-3">
                5.5. You agree to indemnify and hold us, our parent company,
                subsidiaries and affiliates and our, and their directors,
                officers, agents, employee, suppliers, subcontractors or
                licensors harmless from and against any losses, damages and
                expenses (including legal fees and attorney’s fees) (“Claims”)
                arising out of or relating to:
              </p>
              <p className="ml-3 mb-3">
                5.5.1. any claims or demands made by any third party due to or
                arising out of your use of the Services;
              </p>
              <p className="ml-3 mb-3">
                5.5.2. your violation of any of the provisions of these Terms of
                Use, including, without limitation, any of the warranties,
                representations and undertakings;
              </p>
              <p className="ml-3 mb-3">
                5.5.3. your violation of any applicable laws, including, without
                limitation, data protection or anti-spam laws; or
              </p>
              <p className="ml-3 mb-4">
                5.5.4. the manner in which you use our Services, including,
                without limitation, that the content you post, the items you
                list or your trademarks infringe the Intellectual Property
                Rights of any third party or that the content of your listings
                is slanderous, defamatory, obscene or violates any other rights
                (including privacy rights) of any third party (including other
                Site users).
              </p>
            </article>

            <article>
              <h6 id="consuspension">
                6. SUSPENSION, TERMINATION & CANCELLATION
              </h6>
              <p className="mb-4">
                6.1. Without prejudice to any of our rights and remedies and
                without any liability to you, we may limit, suspend or withdraw
                a user’s access to the Services, and /or cancel any product(s)
                order at our sole discretion. For the avoidance of doubt, any
                amounts paid and received by us in relation to a cancelled
                product(s) order will be refunded.
              </p>
            </article>
            <article>
              <h6 id="conreporting">
                7. REPORTING VIOLATIONS OF THESE TERMS OF USE
              </h6>
              <p className="mb-3">
                7.1. We are committed to ensuring that listed items and content
                on our Site comply with these Terms of Use. If you believe that
                a listed item or content breaches these Terms of Use, please
                notify us on the details in clause ‎‎8.12 and we will
                investigate.
              </p>
            </article>

            <article>
              <h6 id="conaffiliates">
                8. giftiglobal.com AFFILIATES & ADDITIONAL FUNCTIONS
              </h6>
              <p className="mb-3">
                8.1. giftiglobal.com by MYLIST FZ LLC and/or its affiliates
                (&quot;MyList Affiliates&quot;) provide website features and
                other products and services to you when you use or sign-up as a
                buyer on the Site. “Affiliate” means, with respect to a
                particular person, any entity that directly or indirectly
                controls, is controlled by, or is under common control with such
                person.
              </p>
              <p className="mb-3">
                8.2. To enhance your experience across the Site and with MyList
                Affiliates, you hereby agree that we may set-up additional
                services, functions and/or accounts on your behalf, by using the
                information you provide to us on the Site.
              </p>
            </article>

            <article>
              <h6 id="congift">9. GIFT CARD INFORMATION</h6>
              <p className="mb-3">
                9.1. Any information supplied through our Site or as a result of
                visits made by you are governed by our terms and conditions of
                the relevant Gift Card.
              </p>
              <p className="mb-3">
                9.2. Gift Cards distributed by email supplied by giftiglobal.com
                are not intended for resale. giftiglobal.com reserves the right
                to change the range of Gift cards offered at any time, without
                prior notification. giftiglobal.com takes no responsibility for
                changes to the stores accepting each Gift card, and for any
                changes to the Terms and Conditions relating to each individual
                Gift card.Users should refer to the back of the specific Gift
                card for any retailer specific terms and conditions and
                giftiglobal.com takes no responsibility to changes to the Terms
                and Conditions of individual Gift card issuers.
              </p>
              <p className="mb-4">
                9.3. giftiglobal.com do not operate a Sales & Return Policy.
                Risk and title will pass to the customer upon delivery to the
                registered email address. giftiglobal.com can take no liability
                for any loss, stolen or damaged Gift cards once responsibility
                of ownership has passed to the customer at time of delivery.
                giftiglobal.com are not directly linked to some of the retailers
                whose products are listed in our range. In the event that any
                one such product or company be placed in either administration
                or receivership there is no obligation on giftiglobal.com to
                replace or exchange any previously issued, unspent Gift cards.
              </p>
            </article>

            <article>
              <h6 id="conpayments">
                10. PAYMENT METHODS AND PROTECTING YOUR SECURITY
              </h6>
              <p className="mb-3">
                10.1. All transactions will be processed in AED (UAE Dirham),
                SAR (Saudi Riyal), USD (US Dollar) or EURO, and we accept
                multiple payment methods for online orders such as VISA &
                MasterCard.
              </p>
              <p className="mb-3">
                10.2. All orders need to be prepaid; you cannot order Gift Cards
                on credit. giftiglobal.com must receive the payment in full
                before Gift Cards are fulfilled.
              </p>
              <p className="mb-4">
                10.3. To ensure that your credit, debit or charge card is not
                being used without your consent, we will validate name, address
                and other personal information supplied by you during the order
                process against appropriate third-party databases. By accepting
                these terms and conditions you consent to such checks being
                made.
              </p>
            </article>

            <article>
              <h6 id="confulfil">11. FULFILLMENT OF GIFT CARDS</h6>
              <p className="mb-4">
                11.1. All orders are subject to administration checks conducted
                by giftiglobal.com. Once your order has been through the
                administration checks, your order will be processed and
                dispatched to the registered email address. Occasionally,
                administration checks can take some time so your order may
                exceed the 72 hour fulfillment period.
              </p>
            </article>

            <article>
              <h6 id="congeneral">12. GENERAL</h6>
              <p className="mb-3">
                12.1. <strong>Governing Law.</strong> These Terms of Use and any
                non-contractual rights or obligations arising out of or in
                connection with it shall be governed by and construed in
                accordance with the laws of the United Arab Emirates, as applied
                in the Emirate of Dubai.
              </p>
              <p className="mb-3">
                12.2. <strong>Dispute Resolution.</strong> If you have an issue
                with our Services, please contact us. We will endeavour to
                resolve your issue as soon as possible. Any disputes or Claims
                arising out of or in connection with these Terms of Use,
                including any non-contractual rights or obligations arising out
                of or in connection with these Terms of Use shall be referred to
                and finally resolved by the Dubai Courts.
              </p>
              <p className="mb-3">
                12.3. <strong>Third Party Rights.</strong> A person who is not a
                party to these Terms of Use has no right to enforce any of its
                terms.
              </p>
              <p className="mb-3">
                12.4. <strong>Relationship of the Parties.</strong> Nothing
                contained in these Terms of Use will be deemed or construed by
                the parties or any third party to create the relationship of
                partnership, joint venture or agency between the parties, it
                being understood that the parties will at all times remain
                independent parties contracting for Services.
              </p>
              <p className="mb-3">
                12.5. <strong>Further Assurances.</strong> The parties will do
                and execute or arrange for the doing and executing of each
                necessary act, document and thing reasonably within its power to
                implement and give effect to these Terms of Use to its full
                extent, including, without limitation, assisting each other in
                complying with applicable law.
              </p>
              <p className="mb-3">
                12.6. <strong>Assignment.</strong> These Terms of Use will be
                binding upon and enure to the benefit of the parties and their
                respective successors and permitted assigns. You agree that you
                will not assign or transfer these Terms of Use or any of your
                rights or obligations under these Terms of Use, whether directly
                or indirectly, without first obtaining our prior written
                consent, such consent not to be unreasonably withheld.
              </p>
              <p className="mb-3">
                12.7. <strong>Entire Agreement.</strong> These Terms of Use and
                the documents referred to or incorporated herein by reference
                contain the entire agreement between the parties with respect to
                the subject matter and supersede all prior agreements,
                negotiations and representations, written or oral, relating to
                its subject matter. Except as provided in these Terms of Use and
                the documents referred to or incorporated into these Terms of
                Use by reference, there are no conditions, representations,
                warranties, undertakings or agreements between the parties
                whether direct, indirect, collateral, express or implied.
              </p>
              <p className="mb-3">
                12.8. <strong>Amendment.</strong> These Terms of Use cannot be
                modified, varied, amended or supplemented in any way by you. We
                reserve the right to modify, vary, amend or supplement these
                Terms of Use at any time and from time to time. We will post the
                current version of these Terms of Use on the Site and each such
                change will be effective upon posting on the Site or upon the
                date designated by us as the “effective date” (if any). Your
                continued use of the Services following any such change
                constitutes your agreement to be bound by and its acceptance of
                these Terms of Use as so modified.
              </p>
              <p className="mb-3">
                12.9. <strong>Severability.</strong> If any provision of these
                Terms of Use is determined by any court of competent
                jurisdiction to be invalid, illegal or unenforceable, that
                provision will be severed from these Terms of Use and the
                remaining provisions will continue in full force and effect so
                long as the economic or legal substance of the transactions
                contemplated hereby is not affected in any manner materially
                adverse to either of the parties.
              </p>
              <p className="mb-3">
                12.10. <strong>Force Majeure.</strong> Neither party will be
                liable for any loss or damage or for any delay or failure in
                performance due to acts beyond the control of such party whether
                or not such acts could reasonably be anticipated (including acts
                of God, legislative, judicial or regulatory acts of any
                provincial or the federal government, court or regulatory
                authority, acts of any of our subcontractors or any third party
                providers of goods or Services to us, labour disruptions,
                blackouts, embargoes).
              </p>
              <p className="mb-3">
                12.11. <strong>No Waiver.</strong> Any waiver by us of any of
                the provisions of these Terms of Use will not constitute a
                waiver of any other provision (whether similar or not), nor will
                any such waiver constitute a continuing waiver of that
                particular provision, unless expressly provided by us in
                writing.
              </p>
              <p className="mb-3">
                12.12. <strong>Communications.</strong> You may contact us
                through email at care@giftiglobal.com, social media or live chat
                on the Site, or by calling our call centre on +971 4 8728418
              </p>
              <p className="mb-4">
                12.13. <strong>Survival.</strong> All provisions that either
                expressly or by their nature survive, will survive suspension or
                termination of your membership of the Site.
              </p>
            </article>
          </div>

          <div className="col-md-4 t-col-right">
            <div className="sticky-side p-3">
              <p>Welcome to Gifti Global</p>
              {/* <p style={{color:"#3F7AEC"}}>About our Site</p> */}
              <ul className="list-group list-group-flush ">
                <li className="border-0 condition-item-style">
                  <a href="#conabout">ABOUT OUR SITE</a>
                  {/* <Link>About our Site</Link> */}
                </li>

                <li className="border-0 condition-item-style">
                  <a href="#coneligibilty">
                    ELIGIBILITY AND REGISTRATION REQUIREMENTS
                  </a>
                  {/* <Link>ELIGIBILITY AND REGISTRATION REQUIREMENTS</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#conobliation">YOUR OBLIGATIONS</a>
                  {/* <Link>YOUR OBLIGATIONS</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#conintellectual">INTELLECTUAL PROPERTY RIGHTS</a>
                  {/* <Link>INTELLECTUAL PROPERTY RIGHTS</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#conwarranties">
                    WARRANTIES, REPRESENTATIONS & UNDERTAKINGS
                  </a>
                  {/* <Link>WARRANTIES, REPRESENTATIONS & UNDERTAKINGS</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#conliability">LIABILITY & INDEMNITIES</a>
                  {/* <Link>LIABILITY & INDEMNITIES</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#consuspension">
                    SUSPENSION, TERMINATION & CANCELLATION
                  </a>
                  {/* <Link>SUSPENSION, TERMINATION & CANCELLATION</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#conreporting">
                    REPORTING VIOLATIONS OF THESE TERMS OF USE
                  </a>
                  {/* <Link>REPORTING VIOLATIONS OF THESE TERMS OF USE</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#conaffiliates">AFFILIATES & ADDITIONAL FUNCTIONS</a>
                  {/* <Link>AFFILIATES & ADDITIONAL FUNCTIONS</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#congift">GIFT CARD INFORMATION</a>
                  {/* <Link>GIFT CARD INFORMATION</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#conpayments">
                    PAYMENT METHODS AND PROTECTING YOUR SECURITY
                  </a>
                  {/* <Link>PAYMENT METHODS AND PROTECTING YOUR SECURITY</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#confulfil">FULFILLMENT OF GIFT CARDS</a>
                  {/* <Link>FULFILLMENT OF GIFT CARDS</Link> */}
                </li>
                <li className="border-0 condition-item-style">
                  <a href="#congeneral">GENERAL</a>
                  {/* <Link>GENERAL</Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ConditionsPage;
