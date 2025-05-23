import { Button, Form } from "react-bootstrap";

const LandingPage = () => {
    return (
        <section className="LandingPage font-sans flex flex-col gap-40 text-gray-800 bg-gradient-to-b from-sky-50 to-white scroll-smooth">
            <div className="shadow-md bg-white w-full">
                <div className="flex justify-between items-center py-6 px-6 md:px-20 max-w-[1440px] m-auto">
                    <div className="flex items-center gap-2">
                        <img src="/logo.jpg" alt="Samolot" className="h-10 w-10" />
                        <h1 className="text-2xl md:text-4xl font-bold text-blue-700">Avio REVO</h1>
                    </div>
                    <Button variant="primary">Przejdź do serwisu</Button>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-12 px-6 md:px-20 max-w-[1440px] m-auto">
                <div className="md:basis-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Twój punkt odlotu</h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-6">
                        Wynajmij luksusowy samolot na wyciągnięcie ręki – szybko, bezpiecznie, wygodnie.
                    </p>
                    <Button variant="success">Zarezerwuj teraz</Button>
                </div>
                <div className="md:basis-1/2 flex justify-center">
                    <img
                        src="/images/plane.png"
                        alt="Samolot"
                        className="max-w-md w-full h-auto drop-shadow-lg"
                    />
                </div>
            </div>

            <div className="px-6 md:px-20 py-16 bg-white text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-10">Jak to działa?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: "📝",
                            title: "1. Rezerwacja online",
                            desc: "Wypełnij prosty formularz lub skontaktuj się z nami bezpośrednio.",
                        },
                        {
                            icon: "📞",
                            title: "2. Potwierdzenie i ustalenia",
                            desc: "Skontaktujemy się z Tobą w celu doprecyzowania szczegółów.",
                        },
                        {
                            icon: "🛫",
                            title: "3. Gotowi do lotu!",
                            desc: "Pojaw się na lotnisku i ciesz się komfortowym lotem.",
                        },
                    ].map((step, i) => (
                        <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                            <p className="text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white px-6 md:px-20 py-16 text-center">
                <div className="max-w-[1440px] m-auto">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Zaufali nam</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center max-w-6xl mx-auto">
                        {["LOT", "Lufthansa", "Emirates", "Qatar Airways"].map((partner, i) => (
                            <div key={i} className="text-xl font-semibold text-blue-700">{partner}</div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
                        {[
                            { number: "100+", label: "Udanych lotów miesięcznie" },
                            { number: "24/7", label: "Dostępność i wsparcie" },
                            { number: "99.9%", label: "Zadowolonych klientów" },
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="text-4xl font-bold text-blue-600">{item.number}</div>
                                <p className="text-gray-700">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-20 max-w-[1440px] m-auto">
                <h3 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Nasze Usługi</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Wynajem Prywatny",
                            desc: "Lataj w pełni prywatnie, bez kolejek i opóźnień.",
                        },
                        {
                            title: "Wynajem Biznesowy",
                            desc: "Idealny dla firm ceniących czas i prestiż.",
                        },
                        {
                            title: "Loty VIP",
                            desc: "Najwyższy komfort i dyskrecja – jak przystało na klasę premium.",
                        },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
                        >
                            <h4 className="text-2xl font-bold mb-3">{card.title}</h4>
                            <p className="text-gray-600">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Kim jesteśmy */}
            <div className="px-6 md:px-20 py-16 bg-gray-50 text-center">
                <div className="max-w-[1440px] m-auto">
                    <h3 className="text-3xl md:text-4xl font-bold mb-10">Kim jesteśmy?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: "🛩️",
                                title: "Nowoczesna flota",
                                desc: "Nasze samoloty są nowe, bezpieczne i regularnie serwisowane.",
                            },
                            {
                                icon: "🕒",
                                title: "Elastyczne terminy",
                                desc: "Lataj wtedy, kiedy potrzebujesz – 24/7.",
                            },
                            {
                                icon: "👨‍✈️",
                                title: "Profesjonalna załoga",
                                desc: "Doświadczeni piloci i obsługa dbają o Twój komfort.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                <p className="text-gray-600 max-w-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Flota */}
            <div className="px-6 md:px-20 py-16 max-w-[1440px] m-auto">
                <h3 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Nasza flota</h3>
                <div className="flex gap-6 overflow-x-auto no-scrollbar py-4">
                    {["jet1.jpg", "jet2.jpg", "jet3.jpg"].map((img, idx) => (
                        <img
                            key={idx}
                            src={`/images/${img}`}
                            alt={`Samolot ${idx + 1}`}
                            className="w-80 sm:w-96 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                    ))}
                </div>
            </div>

            {/* Opinie */}
            <div className="bg-blue-100 py-16 px-6 md:px-20">
                <div className="max-w-[1440px] m-auto">
                    <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">Opinie klientów</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                name: "Katarzyna W.",
                                text: "Lot prywatny do Szwajcarii – perfekcyjna obsługa i pełna wygoda. Polecam w 100%.",
                            },
                            {
                                name: "Marek Z.",
                                text: "Bardzo profesjonalne podejście. Wszystko punktualnie, czysto i komfortowo.",
                            },
                        ].map((review, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow">
                                <p className="italic">“{review.text}”</p>
                                <p className="mt-4 text-right font-semibold">– {review.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Formularz */}
            <div className="px-6 md:px-20 py-16 bg-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Skontaktuj się z nami</h3>
                <Form className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
                    <Form.Group>
                        <Form.Label>Imię i nazwisko</Form.Label>
                        <Form.Control type="text" placeholder="Jan Kowalski" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="jan@example.com" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Wiadomość</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Napisz do nas..." />
                    </Form.Group>
                    <Button variant="primary" className="mt-2">Wyślij wiadomość</Button>
                </Form>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6 text-center text-sm">
                © {new Date().getFullYear()} Avio REVO – Wszystkie prawa zastrzeżone.
            </footer>
        </section>
    );
};

export default LandingPage;
