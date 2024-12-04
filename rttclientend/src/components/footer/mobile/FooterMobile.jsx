import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';


function FooterMobile() {
    return (
        <div className="bg-red text-white pb-[2rem]">
            <span className="flex justify-center">
                <a href="/index.html">
                    <img src="/images/rescueTeamTaguigLogoBlack.png" alt="Rescue Team Taguig main logo (dark)" width="90" />
                </a>
            </span>
            <span className="block text-center">
                <small className="text-xs">
                    <span>
                        <CopyrightOutlinedIcon style={{ fontSize: "1rem" }} />
                    </span>
                    RescueTeamTaguig, team Gregarsh
                </small>
            </span>
        </div>
    );
}

export default FooterMobile;