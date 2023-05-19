import { Link } from "react-router-dom";

const SignUpAs = () =>{
    return(
        <div className="signup__cards__page">
            <h2>Зарегистрироваться как</h2>
            <div className="signup__cards">
                <Link to='/signup/tenant' className="signup__card">
                    <div className="signup__card__content">
                        <svg className="sign__card__icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 50C61.506 50 70.8334 40.6726 70.8334 29.1667C70.8334 17.6607 61.506 8.33334 50 8.33334C38.4941 8.33334 29.1667 17.6607 29.1667 29.1667C29.1667 40.6726 38.4941 50 50 50Z" stroke="#e74361" stroke-width="2"/>
                            <path d="M70.8333 58.3333H72.3C75.3462 58.3342 78.2872 59.4474 80.5705 61.4637C82.8538 63.48 84.3223 66.2607 84.7 69.2833L86.3292 82.3C86.4757 83.4726 86.3712 84.663 86.0225 85.7921C85.6738 86.9213 85.089 87.9633 84.3068 88.8492C83.5246 89.735 82.5629 90.4443 81.4856 90.9301C80.4084 91.4158 79.2401 91.6669 78.0583 91.6667H21.9417C20.7599 91.6669 19.5916 91.4158 18.5144 90.9301C17.4371 90.4443 16.4754 89.735 15.6932 88.8492C14.911 87.9633 14.3262 86.9213 13.9775 85.7921C13.6288 84.663 13.5243 83.4726 13.6708 82.3L15.2958 69.2833C15.6737 66.2593 17.1434 63.4774 19.4285 61.4609C21.7135 59.4444 24.6566 58.3322 27.7042 58.3333H29.1667" stroke="#e74361" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h3>Арендатор</h3>
                        <span>Арендовать площатку</span>
                    </div>
                    <div className="signup__card__fillcolor"></div>
                </Link>
                <Link to='/signup/landlord' className="signup__card">
                    <div className="signup__card__content">
                        <svg className="sign__card__icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.3333 75L41.6667 66.6667H50L55.6667 61C61.459 63.018 67.7649 63.01 73.5521 60.9773C79.3393 58.9446 84.2652 55.0077 87.5234 49.8108C90.7816 44.6139 92.1793 38.4649 91.4876 32.3702C90.7959 26.2755 88.0558 20.5961 83.7158 16.2616C79.3758 11.927 73.693 9.19405 67.5974 8.50998C61.5019 7.8259 55.3546 9.23124 50.1618 12.496C44.969 15.7607 41.0382 20.6915 39.0128 26.4812C36.9874 32.271 36.9873 38.5768 39.0125 44.3667L8.33334 75V91.6667H25L33.3333 83.3333V75Z" stroke="#e74361" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M70.8334 33.3333C73.1345 33.3333 75 31.4679 75 29.1667C75 26.8655 73.1345 25 70.8334 25C68.5322 25 66.6667 26.8655 66.6667 29.1667C66.6667 31.4679 68.5322 33.3333 70.8334 33.3333Z" stroke="#e74361" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h3>Арендодатель</h3>
                        <span>Сдать площатку в аренду</span>
                    </div>
                    <div className="signup__card__fillcolor"></div>
                </Link>
            </div>
        </div>
        
    );
}

export default SignUpAs;