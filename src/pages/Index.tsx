import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const whatsappNumber = "79680707527";
  const telegramChannel = "https://t.me/mebel_Moskow77";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Здравствуйте! Хочу заказать сборку мебели`, '_blank');
  };

  const handleTelegramClick = () => {
    window.open(telegramChannel, '_blank');
  };

  const services = [
    {
      icon: "Armchair",
      title: "Корпусная мебель",
      description: "Шкафы, комоды, стенки, тумбы любой сложности",
      price: "от 1500 ₽"
    },
    {
      icon: "BedDouble",
      title: "Мягкая мебель",
      description: "Кровати, диваны, кресла с механизмами",
      price: "от 2000 ₽"
    },
    {
      icon: "Box",
      title: "Кухонные гарнитуры",
      description: "Установка кухонь, навеска фасадов, регулировка",
      price: "от 3000 ₽"
    },
    {
      icon: "Home",
      title: "Офисная мебель",
      description: "Столы, стеллажи, офисные системы",
      price: "от 1200 ₽"
    },
    {
      icon: "Baby",
      title: "Детская мебель",
      description: "Кроватки, комоды, игровые комплексы",
      price: "от 1800 ₽"
    },
    {
      icon: "Sofa",
      title: "Встроенная мебель",
      description: "Шкафы-купе, гардеробные системы",
      price: "от 2500 ₽"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/073b4f17-30a9-4a07-a940-27799c882823/files/51c57881-f0f7-4ba5-a022-daf11ff6da7a.jpg",
      title: "Шкаф-купе",
      description: "Балашиха, 3 дня работы"
    },
    {
      image: "https://cdn.poehali.dev/projects/073b4f17-30a9-4a07-a940-27799c882823/files/5e367ac1-4f16-42ad-b0e2-8f5c6bda948d.jpg",
      title: "Кухонный гарнитур",
      description: "Москва, установка + регулировка"
    },
    {
      image: "https://cdn.poehali.dev/projects/073b4f17-30a9-4a07-a940-27799c882823/files/05752b45-4c1e-49a6-87a7-729ecf7e77a4.jpg",
      title: "Рабочее место",
      description: "Профессиональный подход"
    }
  ];

  const advantages = [
    { icon: "Award", text: "Опыт работы более 10 лет" },
    { icon: "Shield", text: "Гарантия на все работы" },
    { icon: "Clock", text: "Точность по времени" },
    { icon: "ThumbsUp", text: "Качественные материалы и инструменты" },
    { icon: "MapPin", text: "Выезд в Балашиху и ближайшую Москву" },
    { icon: "Users", text: "Более 500 довольных клиентов" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" className="text-primary" size={28} />
            <h1 className="text-2xl font-bold text-secondary">Мастер Владимир</h1>
          </div>
          <div className="flex gap-3">
            <Button onClick={handleWhatsAppClick} className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
              <Icon name="MessageCircle" className="mr-2" size={18} />
              WhatsApp
            </Button>
            <Button onClick={handleTelegramClick} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Send" className="mr-2" size={18} />
              Telegram
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 text-base px-4 py-1">10+ лет опыта</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary leading-tight">
              Профессиональная сборка мебели в Балашихе и Москве
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Быстро, качественно и с гарантией. Работаю с мебелью любой сложности — от простых комодов до кухонных гарнитуров.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={handleWhatsAppClick} size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" size={20} />
                Вызвать мастера
              </Button>
              <Button onClick={handleTelegramClick} variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {advantages.map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <Icon name={item.icon} className="mx-auto mb-3 text-primary" size={36} />
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-secondary">Услуги</h3>
            <p className="text-xl text-muted-foreground">Работаю с любыми типами мебели</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                <CardHeader>
                  <Icon name={service.icon} className="text-primary mb-3" size={40} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-secondary">Портфолио работ</h3>
            <p className="text-xl text-muted-foreground">Примеры выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 text-secondary">О мастере</h3>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Владимир — профессиональный сборщик мебели</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  Занимаюсь профессиональной сборкой мебели уже более <strong>10 лет</strong>. За это время собрал более 500 единиц мебели самой разной сложности — от простых комодов до сложных кухонных гарнитуров и встроенных шкафов-купе.
                </p>
                <p>
                  Работаю в <strong>Балашихе и ближайших районах Москвы</strong>. Гарантирую качественную и быструю сборку с соблюдением всех технологий. Использую только профессиональный инструмент.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-xl mb-3 text-secondary">Почему выбирают меня:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Большой опыт работы с мебелью любых производителей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Выезд на объект в удобное для вас время</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Гарантия на все виды работ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Честные цены без скрытых доплат</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-secondary">Цены на услуги</h3>
            <p className="text-xl text-muted-foreground">Прозрачное ценообразование</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b last:border-b-0">
                      <div className="flex items-center gap-4">
                        <Icon name={service.icon} className="text-primary" size={32} />
                        <div>
                          <p className="font-semibold text-lg">{service.title}</p>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-primary">{service.price}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <p className="text-center text-lg">
                    <Icon name="Info" className="inline mr-2 text-primary" size={20} />
                    Точная стоимость рассчитывается индивидуально после осмотра или по фото
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-4 text-secondary">Вызвать мастера</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь со мной удобным способом
            </p>
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <Icon name="MapPin" className="text-primary flex-shrink-0" size={28} />
                    <div className="text-left">
                      <p className="font-semibold text-lg">География работы</p>
                      <p className="text-muted-foreground">Балашиха и ближайшие районы Москвы</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <Icon name="Clock" className="text-primary flex-shrink-0" size={28} />
                    <div className="text-left">
                      <p className="font-semibold text-lg">График работы</p>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                  <div className="pt-6 space-y-4">
                    <Button onClick={handleWhatsAppClick} size="lg" className="w-full text-lg py-6 bg-[#25D366] hover:bg-[#20BA5A]">
                      <Icon name="MessageCircle" className="mr-3" size={24} />
                      Написать в WhatsApp
                    </Button>
                    <Button onClick={handleTelegramClick} variant="outline" size="lg" className="w-full text-lg py-6 border-2">
                      <Icon name="Send" className="mr-3" size={24} />
                      Перейти в Telegram канал
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Wrench" size={32} />
              <h4 className="text-2xl font-bold">Мастер Владимир</h4>
            </div>
            <p className="text-lg">Профессиональная сборка мебели в Балашихе и Москве</p>
            <p className="text-sm text-gray-300">Опыт работы более 10 лет • Гарантия качества</p>
            <div className="flex gap-4 justify-center pt-4">
              <Button onClick={handleWhatsAppClick} variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                <Icon name="MessageCircle" className="mr-2" size={18} />
                WhatsApp
              </Button>
              <Button onClick={handleTelegramClick} variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                <Icon name="Send" className="mr-2" size={18} />
                Telegram
              </Button>
            </div>
            <p className="text-sm text-gray-400 pt-8">© 2024 Мастер Владимир. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <Button 
          onClick={handleWhatsAppClick}
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] hover:scale-110 transition-transform"
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
        <Button 
          onClick={handleTelegramClick}
          size="lg"
          variant="outline"
          className="rounded-full w-16 h-16 shadow-2xl border-2 border-primary bg-white hover:bg-primary hover:text-white hover:scale-110 transition-transform"
        >
          <Icon name="Send" size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Index;