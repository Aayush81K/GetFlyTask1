const { useState } = React;

const NavBar = () => {
    return ( <
        div className = "navbar" >
        <
        div className = "logo" > MySite < /div> <
        div className = "nav-links" >
        <
        a href = "#notifications" > Notifications < /a> <
        a href = "#faq" > FAQ < /a> <
        /div> <
        /div>
    );
};

const NotificationCard = ({ title, date }) => {
    return ( <
        div className = "notification-card" >
        <
        h3 > { title } < /h3> <
        p > { date } < /p> <
        /div>
    );
};

const Notifications = () => {
    const updates = [
        { title: "Seminar on React Basics", date: "June 10, 2024" },
        { title: "Advanced CSS Techniques", date: "June 12, 2024" },
        { title: "JavaScript Best Practices", date: "June 14, 2024" },
    ];

    return ( <
        div className = "container" >
        <
        h2 > Latest Updates < /h2> {
            updates.map((update, index) => ( <
                NotificationCard key = { index }
                title = { update.title }
                date = { update.date }
                />
            ))
        } <
        /div>
    );
};

const FAQCard = ({ question, answer }) => {
    return ( <
        div className = "faq-card" >
        <
        h3 > { question } < /h3> <
        p > { answer } < /p> <
        /div>
    );
};

const FAQs = () => {
    const [faqs, setFaqs] = useState([
        { question: "How to register for a seminar?", answer: "You can register through our website's registration form." },
        { question: "Can I get a certificate?", answer: "Yes, certificates are provided for all seminars." },
    ]);

    const handleAddQuestion = () => {
        const newQuestion = prompt("Enter your question:");
        const newAnswer = prompt("Enter the answer:");
        if (newQuestion && newAnswer) {
            setFaqs([...faqs, { question: newQuestion, answer: newAnswer }]);
        }
    };

    return ( <
        div className = "container" >
        <
        h2 > Frequently Asked Questions < /h2> {
            faqs.map((faq, index) => ( <
                FAQCard key = { index }
                question = { faq.question }
                answer = { faq.answer }
                />
            ))
        } <
        button onClick = { handleAddQuestion } > Ask a new question < /button> <
        /div>
    );
};

const App = () => {
    return ( <
        div >
        <
        NavBar / >
        <
        Notifications / >
        <
        FAQs / >
        <
        /div>
    );
};

ReactDOM.render( < App / > , document.getElementById('root'));