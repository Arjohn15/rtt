import MenuIcon from '@mui/icons-material/Menu';

function HeaderMobileDynamic({ onClickSidebar, style }) {
    return (
        <div className={`${style}`}>
            <div className="relative flex justify-center">
                <span>
                    <a href="/index.html">
                        <img src="/images/rescueTeamTaguigLogo.png" alt="Rescue Team Taguig main logo (light)" width="100" />
                    </a>
                </span>
                <span className="absolute left-[1rem] top-[50%] translate-y-[-50%]">
                    <button onClick={() => { onClickSidebar() }}>
                        <MenuIcon />
                    </button>
                </span>
            </div>
        </div>
  );
}

export default HeaderMobileDynamic;