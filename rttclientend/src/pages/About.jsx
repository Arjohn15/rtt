function About() {
    return (
        <div className="leading-8 text-sm font-arimo px-[2rem] lg:text-base lg:leading-8 lg:px-[4rem]">
            <section>
                <h1 className="text-xl text-red text-center font-rowdies my-[2rem] lg:text-3xl lg:my-[3rem]">About RescueTeamTaguig</h1>
                <p className="lg:leading-8">RescueTeamTaguig is a community-driven emergency response organization dedicated to providing immediate assistance to individuals and families affected by natural disasters and calamities in Taguig City. Our mission is to ensure the safety, well-being, and security of the residents during times of crisis, offering rapid-response solutions that focus on medical, evacuation, shelter, and other emergency services.</p>
                <p className="hidden lg:block lg:py-[1rem]">Taguig City, like many other regions, is often impacted by natural disasters such as typhoons, floods, and earthquakes. These events can strike without warning, leaving residents overwhelmed and in urgent need of help. Recognizing the critical need for swift action and proper resources, RescueTeamTaguig was established to fill this gap. Our team is made up of highly-trained professionals and volunteers, working tirelessly to ensure that no one is left behind during emergencies.</p>
            </section>

            <section >
                <h2 className="my-[2rem] text-lg text-red text-center font-rowdies lg:text-2xl">Our Vision</h2>
                <p className="border-y-2 border-y-red py-[1rem] lg:w-[80%] lg:justify-self-center lg:border-2 lg:border-red lg:p-[2rem] lg:rounded-lg">Our vision is to build a resilient, disaster-ready community in Taguig City, where individuals can rely on the prompt support of their neighbors, local authorities, and specialized emergency teams. By focusing on preparedness, rapid response, and coordination with government agencies, we aim to save lives, mitigate risks, and restore normalcy in the aftermath of a calamity.</p>
                <h2 className="my-[2rem] text-lg text-red text-center font-rowdies lg:text-2xl">Our Mission</h2>
                <div className="lg:w-[80%] lg:justify-self-center lg:border-2 lg:border-red lg:p-[2rem] lg:rounded-lg">
                <p>To provide immediate and effective response during calamities and emergencies by:</p>
                <ul className="border-b-2 border-b-red py-[1rem] pl-[1rem] space-y-4 list-disc lg:border-none">
                    <li>Offering fast, reliable, and efficient rescue services.</li>
                    <li>Ensuring the well-being of residents by offering medical care, food, shelter, and evacuation assistance.</li>
                    <li>Educating and preparing communities for future emergencies.</li>
                    <li>Building partnerships with local government units (LGUs) and other disaster response organizations to strengthen the emergency support network.</li>
                </ul>
                </div>
            </section>

            <section className="lg:border-x-2 lg:border-x-gray-300 lg:px-[2rem]">
                <h2 className="my-[2rem] text-lg text-center font-arimo font-bold lg:text-2xl lg:my-[4rem]">How We Operate</h2>
                <p>RescueTeamTaguig operates through a comprehensive, easy-to-follow process that ensures every request is handled swiftly and effectively. When disaster strikes, our well-trained team is ready to mobilize within minutes to provide assistance.</p>
                <h3 className="text-base my-[1rem] font-bold">Request Assistance</h3>
                <p>If you, or someone you know, is experiencing an emergency due to a calamity, you can quickly request our help by clicking the <q>Request Now</q> button on our website. This will take you to a form where you can fill in the essential details regarding your situation. Some of the information required includes:</p>
                <ul className="py-[1rem] pl-[1rem] space-y-4 list-disc">
                    <li><b>Location: </b>To help our team reach you swiftly.</li>
                    <li><b>Type of Emergency:</b>Whether it&rsquo;s a medical emergency, fire, flood, or evacuation need.</li>
                    <li><b>Description of Situation:</b>Any additional details that will help assess the situation&rsquo;s severity.</li>
                </ul>
                <p>Once we receive the request, our team immediately reviews the information and dispatches the appropriate response unit. This could include medical professionals, rescue teams, or vehicles for evacuation, depending on the urgency and nature of the disaster.</p>
                <h3 className="text-base my-[1rem] font-bold">How It Works:</h3>
                <ol className="py-[1rem] pl-[1rem] space-y-4 list-decimal">
                    <li>
                        <strong>Step 1: Request Assistance</strong>
                        <ul className="py-[1rem] pl-[1rem] space-y-4 list-disc">
                            <li>Click the <q>Request Now</q> button on our website or app.</li>
                            <li>Provide essential details about your emergency, such as your location, type of disaster, and the nature of your needs.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Step 2: Assessment and Dispatch</strong>
                        <ul className="py-[1rem] pl-[1rem] space-y-4 list-disc">
                            <li>Once your request is submitted, our team evaluates the situation to prioritize the severity of the emergency.</li>
                            <li>A response team is dispatched to your location as quickly as possible to provide aid, whether it&rsquo;s medical treatment, food, shelter, or transportation.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Step 3: Support & Resolution</strong>
                        <ul className="py-[1rem] pl-[1rem] space-y-4 list-disc">
                            <li>Once our team arrives, we work to address the immediate needs of those affected. Depending on the situation, we may evacuate residents to safe zones, provide medical care, deliver food and supplies, or offer temporary shelter.</li>
                            <li>We also continue to monitor the area to ensure that any ongoing needs are met and that the situation is resolved.</li>
                        </ul>

                    </li>

                </ol>
            </section>
            <section className="my-[2rem]">
                <p className="border-y-2 border-red py-[1rem] lg:py-[3rem] lg:border-t-0">In times of calamity, every second counts. RescueTeamTaguig is here to ensure that you&rsquo;re never alone in the face of disaster. With our swift response, trained team, and strong community ties, we work together to overcome challenges and restore safety and order during emergencies. For more information, please don&rsquo;t hesitate to reach out to us.</p>
            </section>
            <section className="lg:py-[1rem]">
                <h2 className="my-[2rem] text-lg text-red text-center font-rowdies lg:text-2xl">Get Involved</h2>
                <p className="mb-[3rem]">At RescueTeamTaguig, we are always looking for passionate volunteers who are committed to helping others during times of crisis. If you are interested in joining our team, please visit our Volunteer page for more information. Whether you are a trained professional or someone looking to make a difference, your contribution can help save lives and strengthen our community.</p>
            </section>
        </div>
    );
}

export default About;