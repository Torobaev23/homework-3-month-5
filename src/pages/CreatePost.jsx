import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        console.log("Login");
        navigate("/posts");
    };

    return (
        <div>
            <h1>CreatePost</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Логин"/>
                <input type="password" placeholder="Пароль"/>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};
export default CreatePost;