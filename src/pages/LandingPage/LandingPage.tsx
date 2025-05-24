import { Button, Form } from "react-bootstrap";
import planes from "../../data/planes";

const LandingPage = () => {

    return (
        <section className="LandingPage font-sans flex flex-col gap-40  bg-[#0F172A]  text-gray-800 scroll-smooth">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 py-40 md:px-20 max-w-[1440px] m-auto">
                <div className="md:basis-1/2 text-left md:text-left">
                    <h2 className="text-4xl md:text-9xl font-bold text-white mb-6">Twój <br/> punkt <br/> odlotu</h2>
                    <p className="text-lg md:text-xl text-white mb-6">
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

            <div className="px-6 md:px-20 py-16 bg-[#0F172A] text-center">
                <h3 className="text-3xl md:text-7xl text-white font-bold mb-10">Jak to działa?</h3>
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
                        <div key={i} className="border border-[#CA8A04] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-5xl mb-4 text-white">{step.icon}</div>
                            <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                            <p className="text-gray-600 text-white">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-6 md:px-20 py-16 bg-[#0F172A] text-center">
                <div className="max-w-[1440px] m-auto">
                    <h3 className="text-3xl md:text-7xl text-white font-bold mb-6">Zaufali nam</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center max-w-6xl mx-auto">
                        {["LOT", "Lufthansa", "Emirates", "Qatar Airways"].map((partner, i) => (
                            <div key={i} className="text-2xl font-semibold text-[#CA8A04]">{partner}</div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
                        {[
                            { number: "100+", label: "Udanych lotów miesięcznie" },
                            { number: "24/7", label: "Dostępność i wsparcie" },
                            { number: "99.9%", label: "Zadowolonych klientów" },
                        ].map((item, i) => (
                            <div key={i} className='flex flex-col gap-2'>
                                <div className="text-7xl font-bold text-[#CA8A04]">{item.number}</div>
                                <p className="text-white font-semibold">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-20 max-w-[1440px] m-auto">
                <h3 className="text-3xl md:text-7xl text-center text-white font-bold mb-6">Nasze Usługi</h3>
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
                            className="border-2 border-[#CA8A04]  p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
                        >
                            <h4 className="text-2xl text-white font-bold mb-3">{card.title}</h4>
                            <p className="text-white">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

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
                <h3 className="text-3xl md:text-7xl text-center text-white font-bold mb-6">Nasza flota</h3>
                <div className="flex gap-6 overflow-x-auto no-scrollbar py-4">
                    {planes.map((plane, idx) => (
                        <div
                            key={idx}
                            className="relative w-80 sm:w-96 h-64 flex-shrink-0 group rounded-lg overflow-hidden"
                        >
                            <img
                                src={`/images/${plane.url}`}
                                alt={plane.name}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                <span className="text-white text-xl font-semibold text-center">{plane.name}</span>
                            </div>
                        </div>
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

            <div className="px-6 md:px-20 py-16 bg-[#0F172A] text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Skontaktuj się z nami</h3>
                <Form className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
                    <Form.Group>
                        <Form.Label className="text-white">Imię i nazwisko</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Jan Kowalski"
                            className="bg-[#1E293B] border border-gray-600 text-white"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-white">Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="jan@example.com"
                            className="bg-[#1E293B] border border-gray-600 text-white"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-white">Wiadomość</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Napisz do nas..."
                            className="bg-[#1E293B] border border-gray-600 text-white"
                        />
                    </Form.Group>
                    <Button
                        className="mt-4 bg-[#CA8A04] border-0 hover:bg-yellow-600"
                    >
                        Wyślij wiadomość
                    </Button>
                </Form>
            </div>
        </section>
    );
};

export default LandingPage;
