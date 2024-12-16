import InfoIcon from '@mui/icons-material/Info';
import DateAndTime from '../../reusable_components/DateAndTime';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SafetyCheckOutlinedIcon from '@mui/icons-material/SafetyCheckOutlined';
import EvacuationInfo from '../../reusable_components/EvacuationInfo';
import { NavLink } from "react-router-dom";
const typhoon = {
    name: "Typhoon Rolly",
    signalNumber: 4,
    windSpeed: "175 km/h",
    rainfallWarning: "Heavy"
};

const affectedAreas = [
    "Bagumbayan",
    "Central Bicutan",
    "North Daang Hari",
    "South Daang Hari",
    "Hagonoy",
    "Ibayo Tipas",
    "Ligid-Tipas",
    "New Lower Bicutan",
    "Pinagsama",
    "San Juan",
    "San Isidro",
    "San Miguel",
    "San Pedro",
    "Santa Ana",
    "Signal Village",
    "Tanyag",
    "Upper Bicutan",
    "Western Bicutan",
    "Western Bicutan (Poblacion)"
]

const contacts = [
    { department: "Command Center", numbers: ["(02) 8789-3200"], icon: (iconSize) => <HubOutlinedIcon style={{ fontSize: iconSize }} />, id: 1 },
    { department: "PNP", numbers: ["(02) 8642-3582", "0998-598-7932"], icon: (iconSize) => <LocalPoliceOutlinedIcon style={{ fontSize: iconSize }} />, id: 2 },
    { department: "Taguig BFP", numbers: ["(02) 8837-0740", "(02) 8837-4496", "0906-211-0919"], icon: (iconSize) => <FireTruckOutlinedIcon style={{ fontSize: iconSize }} />, id: 3 },
    { department: "Taguig Rescue", numbers: ["0919-070-3112"], icon: (iconSize) => <SupportOutlinedIcon style={{ fontSize: iconSize }} />, id: 4 },
]

const evacuationCenters = [
    { placeName: "Taguig Sports Complex", location: "Western Bicutan, Taguig", id: 1 },
    { placeName: "TAGUIG National High School", location: "Upper Bicutan, Taguig", id: 2 },
    { placeName: "Dona Manuela Evacuation Center", location: "North Daang Hari, Taguig", id: 3 },
    { placeName: "Pinagsama Covered Court", location: "Pinagsama, Taguig", id: 4 },
    { placeName: "Barangay New Lower Bicutan Evacuation Center", location: "New Lower Bicutan, Taguig", id: 5 },
];

const publicAdvisory = [
    {
        advisoryType: "Safety Guidelines", guidelines: [
            { event: "Before the typhoon:", advice: ["Stock up on food, water, and emergency supplies for at least 3 days.", "Secure your home by reinforcing doors and windows.", "Charge all electronics devices.", "Identify the nearest evacuation center and prepare a go-bag with essentials."], id: 11 },
            { event: "During the Typhoon:", advice: ["Stay indoors and avoid traveling unless necessary.", "Move to the higher ground if you're in a flood-prone area.", "Avoid using electrical appliances if flooding occurs."], id: 12 },
            { event: "After the Typhoon:", advice: ["Check for structural damage before re-entering your home", "Avoid wading in floodwaters to prevent waterborne diseases.", "Report downed power lines or other hazards to the authorities."], id: 13 },
        ], id: 1
    },
    {
        advisoryType: "HealthAdvisories", guidelines: [
            { event: "Preventing Diseases", advice: ["Boil drinking water if the supply is unsafe.", "Wear protective gear when cleaning flooded areas.", "Dispose of wet items to prevent mold growth."], id: 14 },
        ], id: 2
    },
]

function MainBoth() {
    return (
        <>
            <section className="relative bg-[url('/images/rescueTeamTaguigMainPoster.png')] bg-cover bg-no-repeat bg-center lg:bg-fixed">
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(233,75,74,1)] to-[rgba(233,75,74,0.3)] lg:from-[rgba(233,75,74,0.7)] lg:bg-[rgba(233,75,74,0.7)]">
                </div>
                <div className="relative z-10 p-6 text-white">
                    <h1 className="font-rowdies font-bold text-xl leading-8 sm:text-4xl sm:py-[1rem] lg:text-6xl lg:drop-shadow-2xl lg:leading-[5rem] lg:py-[7rem] lg:text-center">WELCOME TO <br /> RESCUETEAMTAGUIG</h1>
                    <p className="font-rowdies text-sm leading-7 mt-[0.7rem] sm:text-lg lg:hidden">We help people who are <br /> experiencing difficulties due to <br /> calamity in Taguig City</p>
                </div>
            </section>
            <section className="lg:flex lg:flex-col lg:items-center">
                <div className="hidden lg:block">
                    <div className="w-max px-[2rem] py-[4rem] drop-shadow-lg my-[5rem]">
                        <h2 className="font-rowdies text-4xl mb-[2rem] text-red text-center drop-shadow-lg">About RescueTeamTaguig</h2>
                        <p className="font-arimo text-xl text-center leading-10">We help people who are experiencing difficulties due to calamity in Taguig City. You can visit our <NavLink to="/about" className="underline">about</NavLink> page for more information.</p>
                    </div>
                </div>
                <div className="lg:w-[80%] lg:my-0 lg:mb-[5rem]">
                    <h2 className="font-rowdies font-extrabold text-lg text-red text-center px-[1rem] mt-[5rem] mb-[1rem] md:text-xl md:p-[1rem] lg:text-xl lg:drop-shadow-lg lg:mt-[1rem] lg:p-[0.5rem]">NEED AN URGENT HELP DUE TO CALAMITY?</h2>
                    <p className="text-xs leading-6 border-red border-[1.5px] rounded-xl mx-[1rem] p-[0.5rem] md:text-base md:leading-8 lg:border-none lg:text-lg lg:text-center lg:leading-10">If you or someone you know is affected by a disaster or emergency, we&rsquo;re here to assist you. Please click the <span className="text-red font-bold"><q>Request now</q></span> button and fill in the required details to ensure we can dispatch a dedicated response team to your location immediately.</p>
                </div>
                <div className="text-center lg:border-2 lg:border-gray-300 lg:mx-[5rem] lg:mb-[5rem] lg:rounded-lg lg:p-[2rem]">
                    <h3 className="text-lg text-red font-rowdies my-[2rem] sm:text-xl lg:text-left lg:text-2xl lg:my-0">How it works:</h3>
                    <div className="text-xs flex justify-center md:text-sm lg:text-base">
                        <ol className="w-[70%] font-arimo lg:grid lg:grid-flow-col lg:w-full lg:grid-cols-3 lg:py-[2rem]">
                            <li>
                                <h4 className="text-base bg-red text-white rounded-lg sm:w-[60%] sm:justify-self-center lg:text-xl lg:bg-transparent lg:text-red lg:font-bold">STEP 1:</h4>
                                <p className="my-[1rem] leading-6 lg:leading-8"><strong>Click the <span className="text-red font-bold"><q>Request now</q></span> button.</strong></p>
                            </li>
                            <li>
                                <h4 className="text-base bg-red text-white rounded-lg sm:w-[60%] sm:justify-self-center lg:text-xl lg:bg-transparent lg:text-red lg:font-bold">STEP 2:</h4>
                                <p className="my-[1rem] leading-6 lg:leading-8"><strong>Complete the form</strong> with essential information about your situation, including your location, type of emergency, and any urgent needs.</p>
                            </li>
                            <li>
                                <h4 className="text-base bg-red text-white rounded-lg sm:w-[60%] sm:justify-self-center lg:text-xl lg:bg-transparent lg:text-red lg:font-bold">STEP 3:</h4>
                                <p className="my-[1rem] leading-6 lg:leading-8"><strong>Follow the instructions</strong> provided to help us assess the situation and prioritize your request based on severity.</p>
                            </li>
                        </ol>
                    </div>
                    <div className="text-xs font-arimo text-justify py-[2rem] mx-[1rem] mb-[1.5rem] border-y-gray-380 border-y-2 md:text-sm md:mx-[2rem] md:my-[2rem] md:text-justify lg:my-0 lg:border-none lg:p-[1.5rem]">
                        <p className="leading-5 lg:inline">Our team is ready to respond quickly to provide aid, whether it&rsquo;s medical assistance, food, shelter, or evacuation support. Your safety and well-being are our top priority, and we will do everything we can to reach you as swiftly as possible.</p>
                        <i><strong> Act fast - help is just a click away.</strong></i>
                    </div>
                </div>
            </section>
            <section className="bg-red px-[1rem] py-[1.5rem]">
                <h2 className="flex justify-center items-center">
                    <span className="mr-[0.5rem]">
                        <InfoIcon className="text-white" />
                    </span>
                    <span className="font-rowdies font-bold text-lg text-white md:text-xl lg:text-xl lg:py-[1.5rem]">INFORMATION CENTER</span>
                </h2>

                <div className="lg:flex lg:justify-center">
                    <span className="block bg-white font-arimo font-bold text-xs text-center p-[0.5rem] mx-[2rem] my-[1rem] rounded-full md:text-sm lg:w-max lg:text-base">
                        <DateAndTime />
                    </span>
                </div>

                <div className="text-sm text-white border-white border-[1px] rounded-[10px] mt-[1.5rem] p-[0.5rem] lg:flex lg:border-none lg:p-[2rem]">
                    <div className="lg:bg-white lg:text-black lg:rounded-lg lg:p-[1rem] lg:border-[rgba(0,0,0,0.7)] lg:border-2">
                        <h3 className="font-rowdies text-center md:text-base lg:text-xl">Typhoon Overview</h3>
                        <ul className="font-arimo text-xs space-y-3 my-[1.5rem] md:text-sm lg:text-base lg:space-y-6">
                            <li>Name: <span className="font-bold underline decoration-solid">{typhoon.name}</span></li>
                            <li>Signal No: <span className="font-bold underline decoration-solid">{typhoon.signalNumber}</span></li>
                            <li>Wind speed: <span className="font-bold underline decoration-solid">{typhoon.windSpeed}</span></li>
                            <li>Rainfall warning: <span className="font-bold underline decoration-solid">{typhoon.rainfallWarning}</span></li>
                        </ul>
                    </div>
                    <div className="lg:grow lg:flex lg:flex-col lg:items-center">
                        <h3 className="font-rowdies text-center md:text-base lg:text-xl">Affected Areas within Taguig</h3>
                        <ul className="list-disc border-2 border-[rgba(0,0,0,0.7)] rounded-[10px] font-arimo text-xs text-black bg-white px-[2rem] py-[1rem] my-[1.5rem] grid grid-rows-5 grid-flow-col gap-5 overflow-x-auto md:text-sm lg:w-[70%] lg:py-[2.5rem]">
                            {affectedAreas.sort().map(area => {
                                return <li key={area} className='text-nowrap lg:text-base'>{area}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="my-[2rem]">
                <h3 className="font-rowdies text-center text-sm text-red flex justify-center items-center md:text-base lg:text-2xl lg:py-[1rem]">
                    <span className="mr-[0.5rem]">
                        <LocalHospitalIcon style={{ fontSize: "1.2rem" }} />
                    </span>
                    Emergency Resources
                </h3>

                <h4 className="font-rowdies text-center text-xs flex justify-center items-center my-[1.5rem] md:text-base lg:text-xl">
                    <span className="mr-[0.5rem]">
                        <ContactPhoneOutlinedIcon style={{ fontSize: "1.2rem" }} />
                    </span>
                    Contact Numbers
                </h4>
                <div className="lg:flex lg:justify-center lg:my-[5rem]">
                    <div className="font-arimo flex flex-col items-center text-center text-sm md:text-base lg:flex-row lg:items-start lg:w-[80%] lg:border-gray lg:border-l-2">
                        {contacts.map(contact => {
                            return <div key={contact.id} className="w-[55%] relative border-b-[1px] max-lg:border-red p-[1rem] lg:border-b-0 lg:border-r-2 lg:w-full lg:h-full lg:border-gray-300 lg:py-[5rem]">
                                <p className="mb-[0.5rem] lg:text-lg lg:mb-[1rem]">{contact.department}</p>
                                <ul className="space-y-2 lg:space-y-4">
                                    {contact.numbers.map(number => {
                                        return <li key={number} className="font-bold">{number}</li>
                                    })}
                                </ul>
                                <div className="lg:hidden">
                                    <span className="absolute left-0 top-[50%] translate-y-[-50%] text-red">{contact.icon("1.5rem")}</span>
                                </div>
                                <div className="hidden lg:block">
                                    <span className="absolute left-[50%] top-[1rem] translate-x-[-50%] translate-y-[-50%] text-red left-[1rem] top-[1rem]">{contact.icon("2.5rem")}</span>
                                </div>
                            </div>;
                        })}
                    </div>
                </div>
            </section>
            <section className="bg-red text-white lg:p-[1rem]">
                <h3 className="font-rowdies text-center flex justify-center items-center pt-[1rem] md:text-base lg:text-xl">
                    <span className="mr-[0.5rem]">
                        <HolidayVillageOutlinedIcon />
                    </span>
                    Evacuation Centers
                </h3>

                <ul className="list-disc font-arimo text-xs px-[2rem] py-[1.5rem] grid grid-rows-3 grid-flow-col gap-y-5 gap-x-10 overflow-x-auto md:text-sm lg:w-max">
                    {evacuationCenters.map(eC => {
                        return <li key={eC.id} className='text-nowrap'>
                            <EvacuationInfo key={eC.id} eC={eC} />
                        </li>
                    })}
                </ul>
            </section>

            <section>
                <h2 className="font-rowdies text-lg flex justify-center items-center mt-[1.5rem] md:text-xl md:p-[1rem] lg:text-3xl lg:my-[3rem]">
                    <span className="md:hidden">
                        <CampaignOutlinedIcon style={{ fontSize: "1.5rem" }} />
                    </span>
                    <span className="hidden md:block">
                        <CampaignOutlinedIcon style={{ fontSize: "2rem" }} />
                    </span>
                    PUBLIC ADVISORY
                </h2>



                <div className="font-arimo text-sm mb-[3rem]">
                    {publicAdvisory.map(pA => {
                        return <div key={pA.id}>
                            <h3 className="font-arimo text-xs font-bold text-center my-[1.5rem]">

                                {pA.id === 1 ?
                                    <div className="text-[#279D2F] md:text-sm lg:text-base">
                                        <span>
                                            <SafetyCheckOutlinedIcon />
                                        </span>
                                        {pA.advisoryType}
                                    </div>
                                    :
                                    <div className="text-red md:text-sm lg:text-base lg:mt-[3rem]">
                                        <span>
                                            <HealthAndSafetyOutlinedIcon />
                                        </span>
                                        {pA.advisoryType}
                                    </div>
                                }
                            </h3>
                            <div className="lg:flex">
                            {pA.guidelines.map(gl => {
                                return <div key={gl.id} className="border-[rgba(233,75,74,0.5)] border-t-[1px] pb-[1rem] mx-[1rem] mt-[1rem] lg:mt-[3rem]">
                                    <h4 className="font-bold p-[1rem] md:text-base lg:text-lg">{gl.event}</h4>
                                    <ul className="list-disc px-[2.5rem] space-y-2 md:text-base lg:text-">
                                        {gl.advice.map(a => {
                                            return <li key={a}>{a}</li>
                                        })}
                                    </ul>
                                </div>
                            })}
                            </div>
                        </div>
                    })}
                </div>

            </section>
        </>
    );
}

export default MainBoth;