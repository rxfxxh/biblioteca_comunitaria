const livros = {
    "a-rainha-vermelha": {
        titulo: "A rainha vermelha",
        autor: "Victoria Aveyard",
        capa: "https://books.google.com.br/books/publisher/content?id=I__4CQAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2_ycecWygunmCY2delosGQfPXxwQ&w=1280",
        descricao: "Nesta fantasia repleta de ação, romance e muitas reviravoltas, a ordem da sociedade é ameaçada quando Mare Barrow, uma jovem comum de sangue vermelho, descobre que tem um poder até então exclusivo à elite de sangue prateado. O mundo de Mare Barrow é dividido pelo sangue: vermelho ou prateado."
    },
    "a-selecao": {
        titulo: "A seleção",
        autor: "Kiera Cass",
        capa: "https://m.media-amazon.com/images/I/81ql6xkkliL.jpg",
        descricao: "Muitas garotas sonham em ser princesas, mas este não é o caso de America Singer. Ela topa se inscrever na Seleção só para agradar a mãe, certa de que não será sorteada para participar da competição em que o príncipe escolherá sua futura esposa. Mas é claro que depois disso sua vida nunca mais será a mesma..."
    },

    "diario-de-um-banana": {
        titulo: "Diário de um Banana",
        autor: "Jeff Kinney",
        capa: "https://m.media-amazon.com/images/I/71fWaI5myqL._UF1000,1000_QL80_.jpg",
        descricao: "Greg Heffley é um garoto que está prestes a entrar no ensino médio. Para ajudá-lo a sobreviver a essa nova fase, ele decide escrever um diário, onde conta suas aventuras e desventuras. Com muito humor, Greg narra os desafios de crescer, lidar com a família e os amigos, e enfrentar as situações embaraçosas do dia a dia."
    },
    "o-pequeno-principe": {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine De Saint-Exupéry",
        capa: "https://m.media-amazon.com/images/I/81TmOZIXvzL.jpg",
        descricao: "O Pequeno Príncipe é uma fábula poética que aborda temas profundos como amizade, amor e a essência da vida através dos olhos de uma criança. A história começa com um piloto que cai no deserto do Saara e encontra um menino estranho, o Pequeno Príncipe, que vem de um pequeno planeta. Ao longo de suas conversas, o Pequeno Príncipe compartilha suas experiências e aprendizados enquanto viajava por diferentes planetas, encontrando personagens únicos que representam várias facetas da humanidade. Através de suas aventuras, ele ensina lições valiosas sobre a importância de ver com o coração, valorizar as coisas simples da vida e compreender o verdadeiro significado das relações humanas."
    },
    "harry-potter": {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        capa: "https://m.media-amazon.com/images/I/81pB+joKL4L._UF1000,1000_QL80_.jpg",
        descricao: "O primeiro livro da saga Harry Potter apresenta o jovem bruxo descobrindo o mundo mágico e a Escola de Magia e Bruxaria de Hogwarts. Lá, ele conhece Rony e Hermione, descobre segredos sobre seu passado e enfrenta, pela primeira vez, a ameaça de Voldemort. Uma história de amizade, coragem e fantasia que conquistou milhões de leitores no mundo inteiro."
    },

    "senhor-dos-aneis": {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        autor: "J.R.R. Tolkien",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg",
        descricao: "Na Terra-média, um anel mágico capaz de controlar todos os outros foi perdido por séculos. Quando o jovem hobbit Frodo herda o Um Anel, ele é encarregado de destruí-lo para evitar que caia nas mãos de Sauron. Com a ajuda de uma companhia formada por humanos, elfos, anões e hobbits, Frodo inicia uma jornada épica de coragem, amizade e sacrifício."
    },

    "1984": {
        titulo: "1984",
        autor: "George Orwell",
        capa: "https://m.media-amazon.com/images/I/61t0bwt1s3L.jpg",
        descricao: "Um clássico da literatura distópica, 1984 descreve um regime totalitário em que o Grande Irmão vigia todos os cidadãos. O protagonista Winston Smith trabalha no Ministério da Verdade, onde reescreve a história para servir ao Partido. A obra aborda censura, manipulação e a luta pela liberdade individual em uma sociedade opressiva."
    },

    "dom-quixote": {
        titulo: "Dom Quixote",
        autor: "Miguel de Cervantes",
        capa: "https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525425669_hd.jpg",
        descricao: "Considerado o primeiro romance moderno, Dom Quixote narra as aventuras de um fidalgo que enlouquece após ler muitos livros de cavalaria. Com seu fiel escudeiro Sancho Pança, ele parte em busca de aventuras, confundindo moinhos de vento com gigantes e vivendo situações cômicas e profundas que refletem sobre realidade, sonho e idealismo."
    },

    "orgulho-e-preconceito": {
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        capa: "https://m.media-amazon.com/images/I/71fj3qrLmFL._UF1000,1000_QL80_.jpg",
        descricao: "Publicado em 1813, este romance clássico retrata a vida da jovem Elizabeth Bennet e sua relação com o orgulhoso Sr. Darcy. A obra explora questões sociais, o papel da mulher, casamento e moralidade na Inglaterra do século XIX. É considerado um dos maiores romances da literatura mundial pela sua ironia e crítica social."
    },

    "o-morro-dos-ventos-uivantes": {
        titulo: "O Morro dos Ventos Uivantes",
        autor: "Emily Brontë",
        capa: "https://m.media-amazon.com/images/I/71lqmkoeosL.jpg",
        descricao: "Único romance escrito por Emily Brontë, a obra narra a intensa e turbulenta relação entre Heathcliff e Catherine Earnshaw, marcada por paixão, vingança e tragédia. Ambientado em uma região sombria e isolada da Inglaterra, o livro explora os extremos da natureza humana e é considerado um marco do romantismo gótico."
    },
    "o-alquimista": {
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        capa: "https://m.media-amazon.com/images/I/81slUinjTlS._UF1000,1000_QL80_.jpg",
        descricao: "Uma fábula sobre seguir os sonhos e ouvir o coração, acompanhando Santiago, um jovem pastor, em sua jornada pelo deserto em busca de um tesouro."
    },
    "dom-casmurro": {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        capa: "https://http2.mlstatic.com/D_NQ_NP_771425-MLA83532536256_042025-O.webp",
        descricao: "Romance clássico da literatura brasileira, onde Bentinho narra sua história de amor, ciúmes e dúvida sobre a fidelidade de Capitu."
    },
    "capitães-da-areia": {
        titulo: "Capitães da Areia",
        autor: "Jorge Amado",
        capa: "https://m.media-amazon.com/images/I/81t7altQZxL.jpg",
        descricao: "Segue a vida de um grupo de crianças de rua em Salvador, explorando temas de pobreza, amizade e sobrevivência."
    },
    "a-marca-de-uma-lágrima": {
        titulo: "A Marca de uma Lágrima",
        autor: "Pedro Bandeira",
        capa: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig-1p3AF8AjSnh8Ihm9rHPhxrlpI9CR8MQQ_2l6ZYXWHpjauAmh6ZIGBxKR47UK_4F_R-YKoZtT_INN1SVCoLradrkjWm55K9wQpWinVAUD6TE8KagLU0MyiZnskj2CPhp3olo/s916/20210616_223314.jpg",
        descricao: "Romance infantojuvenil sobre emoções, primeira paixão e amadurecimento adolescente."
    },
    "memorias-postumas-de-bras-cubas": {
        titulo: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        capa: "https://m.media-amazon.com/images/I/815u+SBDpJL.jpg",
        descricao: "Narrado por um defunto, o livro é uma sátira à sociedade brasileira do século XIX, abordando vaidades, amores e críticas sociais."
    },
    "vidas-secas": {
        titulo: "Vidas Secas",
        autor: "Graciliano Ramos",
        capa: "https://m.media-amazon.com/images/I/71NYL2AbBIL.jpg",
        descricao: "Conta a história de uma família de retirantes no sertão nordestino, mostrando a luta contra a seca e a opressão social."
    },
    "macunaima": {
        titulo: "Macunaíma",
        autor: "Mário de Andrade",
        capa: "https://m.media-amazon.com/images/I/71oKejQDiNL._UF1000,1000_QL80_.jpg",
        descricao: "Romance modernista que mistura mitologia indígena e cultura popular brasileira, narrando as aventuras do herói sem caráter, Macunaíma."
    },
    "a-menina-que-roubava-livros": {
        titulo: "A Menina que Roubava Livros",
        autor: "Markus Zusak (adaptação nacional disponível)",
        capa: "https://m.media-amazon.com/images/I/61L+4OBhm-L._UF1000,1000_QL80_.jpg",
        descricao: "Durante a Segunda Guerra Mundial, Liesel rouba livros e descobre o poder das palavras em meio às dificuldades da época."
    },
    "o-menino-no-espelho": {
        titulo: "O Menino no Espelho",
        autor: "Fernando Sabino",
        capa: "https://m.media-amazon.com/images/I/61CgXdt2y4L.jpg",
        descricao: "Um romance juvenil que narra as aventuras e travessuras de um garoto, explorando sua imaginação e criatividade."
    },
    "o-auto-da-compadecida": {
        titulo: "O Auto da Compadecida",
        autor: "Ariano Suassuna",
        capa: "https://a-static.mlcdn.com.br/1500x1500/livro-auto-da-compadecida/magazineluiza/223514900/f07bfb20765731916f4e6086b44ced88.jpg",
        descricao: "Peça/romance que mistura comédia e crítica social, contando as aventuras de João Grilo e Chicó no sertão nordestino."
    }
};
