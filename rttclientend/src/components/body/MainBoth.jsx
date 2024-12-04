import InfoIcon from '@mui/icons-material/Info';
import DateAndTime from '../../reusable_components/DateAndTime';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SafetyCheckOutlinedIcon from '@mui/icons-material/SafetyCheckOutlined';

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
    { department: "Command Center", numbers: ["(02) 8789-3200"], icon: <HubOutlinedIcon />, id: 1 },
    { department: "PNP", numbers: ["(02) 8642-3582", "0998-598-7932"], icon: <LocalPoliceOutlinedIcon />, id: 2 },
    { department: "Taguig BFP", numbers: ["(02) 8837-0740", "(02) 8837-4496", "0906-211-0919"], icon: <FireTruckOutlinedIcon />, id: 3 },
    { department: "Taguig Rescue", numbers: ["0919-070-3112"], icon: <SupportOutlinedIcon />, id: 4 },
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
            <section className="relative">
                <div>
                    <img src="/images/rescueTeamTaguigMainPoster.png" alt="Rescue Team Taguig Main Poster with red shade" width="100%" />
                </div>
                <div className="absolute top-0 w-full h-full text-white px-[1rem] py-[1.5rem]" style={{
                    background: "linear-gradient(90deg, rgba(233,75,74,0.9) 50%, rgba(255,255,255,0) 100%)",
                }}>
                    <h1 className="font-rowdies font-bold text-xl leading-8">WELCOME TO <br /> RESCUETEAMTAGUIG</h1>
                    <p className="font-rowdies text-sm leading-7 mt-[0.7rem]">We help people who are <br /> experiencing difficulties due to <br /> calamity in Taguig City</p>
                </div>
            </section>
            <section className="my-[4rem]">
                <h2 className="font-rowdies font-extrabold text-lg text-red text-center px-[1rem]">NEED AN URGENT HELP DUE TO CALAMITY?</h2>
                <p className="text-xs leading-6 border-red border-[1.5px] rounded-xl mx-[1rem] my-[1.5rem] p-[0.5rem]">Click the <span className="text-red font-bold"><q>Request now</q></span> button then fill up necessary information and follow the instructions so we can send a dedicated team to your location.</p>
            </section>
            <section className="bg-red px-[1rem] py-[1.5rem]">
                <h2 className="flex justify-center items-center">
                    <span className="mr-[0.5rem]">
                        <InfoIcon className="text-white" />
                    </span>
                    <span className="font-rowdies font-bold text-lg text-white">INFORMATION CENTER</span>
                </h2>

                <span className="block bg-white font-arimo font-bold text-xs text-center p-[0.5rem] mx-[2rem] my-[1rem] rounded-full">
                    <DateAndTime />
                </span>

                <div className="text-sm text-white border-white border-[1px] rounded-[10px] mt-[1.5rem] p-[0.5rem]">
                    <h3 className="font-rowdies text-center">Typhoon Overview</h3>
                    <ul className="font-arimo text-xs space-y-3 my-[1.5rem]">
                        <li>Name: <span className="font-bold underline decoration-solid">{typhoon.name}</span></li>
                        <li>Signal No: <span className="font-bold underline decoration-solid">{typhoon.signalNumber}</span></li>
                        <li>Wind speed: <span className="font-bold underline decoration-solid">{typhoon.windSpeed}</span></li>
                        <li>Rainfall warning: <span className="font-bold underline decoration-solid">{typhoon.rainfallWarning}</span></li>
                    </ul>
                    <h3 className="font-rowdies text-center">Affected Areas within Taguig</h3>
                    <ul className="list-disc border-2 border-[rgba(0,0,0,0.7)] rounded-[10px] font-arimo text-xs text-black bg-white px-[2rem] py-[1rem] my-[1.5rem] grid grid-rows-5 grid-flow-col gap-5 overflow-x-auto">
                        {affectedAreas.sort().map(area => {
                            return <li key={area} className='text-nowrap'>{area}</li>
                        })}
                    </ul>
                </div>
            </section>
            <section className="my-[2rem]">
                <h3 className="font-rowdies text-center text-sm text-red flex justify-center items-center">
                    <span className="mr-[0.5rem]">
                        <LocalHospitalIcon style={{ fontSize: "1.2rem" }} />
                    </span>
                    Emergency Resources
                </h3>

                <h4 className="font-rowdies text-center text-xs flex justify-center items-center my-[1.5rem]">
                    <span className="mr-[0.5rem]">
                        <ContactPhoneOutlinedIcon style={{ fontSize: "1.2rem" }} />
                    </span>
                    Contact Numbers
                </h4>

                <div className="font-arimo flex flex-col items-center text-center text-sm">
                    {contacts.map(contact => {
                        return <div key={contact.id} className="w-[55%] relative border-b-[1px] border-black p-[1rem]">
                            <p className="mb-[0.5rem]">{contact.department}</p>
                            <ul className="space-y-2">
                                {contact.numbers.map(number => {
                                    return <li key={number} className="font-bold">{number}</li>
                                })}
                            </ul>
                            <span className="absolute left-0 top-[50%] translate-y-[-50%] text-red">{contact.icon}</span>
                        </div>;
                    })}
                </div>
            </section>
            <section className="bg-red text-white">
                <h3 className="font-rowdies text-center flex justify-center items-center pt-[1rem]">
                    <span className="mr-[0.5rem]">
                        <HolidayVillageOutlinedIcon />
                    </span>
                    Evacuation Centers
                </h3>

                <ul className="list-disc font-arimo text-xs px-[2rem] py-[1.5rem] grid grid-rows-3 grid-flow-col gap-y-5 gap-x-10 overflow-x-auto">
                    {evacuationCenters.map(eC => {
                        return <li key={eC.id} className='text-nowrap'>
                            <button>
                                <span className="mr-[0.5rem]">
                                {eC.placeName}
                                </span>   
                                <InfoOutlinedIcon style={{ fontSize: "1rem" }} />
                            </button>
                        </li>
                    })}
                </ul>
            </section>

            <section>
                <h2 className="font-rowdies text-lg flex justify-center items-center mt-[1.5rem]">
                    <span>
                        <CampaignOutlinedIcon style={{ fontSize: "2rem" }} />
                    </span>
                    PUBLIC ADVISORY
                </h2>



                <div className="font-arimo text-sm mb-[3rem]">
                    {publicAdvisory.map(pA => {
                        return <div key={pA.id}>
                            <h3 className="font-arimo text-xs font-bold text-center my-[1.5rem]">

                                {pA.id === 1 ?
                                    <div className="text-[#279D2F]">
                                        <span>
                                            <SafetyCheckOutlinedIcon />
                                        </span>
                                        {pA.advisoryType}
                                    </div>
                                    :
                                    <div className="text-red">
                                        <span>
                                            <HealthAndSafetyOutlinedIcon />
                                        </span>
                                        {pA.advisoryType}
                                    </div>
                                }
                            </h3>
                            {pA.guidelines.map(gl => {
                                return <div key={gl.id} className="border-[rgba(233,75,74,0.5)] border-y-[1px] pb-[1rem] mx-[1rem] mt-[1rem]">
                                    <h4 className="font-bold p-[1rem]">{gl.event}</h4>
                                    <ul className="list-disc px-[2.5rem] space-y-2">
                                        {gl.advice.map(a => {
                                            return <li className="" key={a}>{a}</li>
                                        })}
                                    </ul>
                                </div>
                            })}
                        </div>
                    })}
                </div>

            </section>
        </>
    );
}

export default MainBoth;