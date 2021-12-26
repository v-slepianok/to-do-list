import './footer-panel.css';

const FooterPanel = ({tasksCounter}) => {
    return(
        <div className="footer-panel">
            <p>Don't let your dreams be dreams, you have  <span>{tasksCounter}</span> tasks left</p>
        </div>
    )
}

export default FooterPanel;
