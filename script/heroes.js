

var Heroes = [
    {
        name: 'Ana',
        category: 'Support',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/ana/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/ana/hero-select-portrait.png',
        description: 'Essa justiceira destemida da Overwatch reapareceu após anos de isolamento para proteger uma nova geração.'
    },
    {
        name: 'Ashe',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/hero-select-portrait.png',
        description: 'Líder da notória gangue Deadlock, que aterroriza o sudoeste americano.'
    },
    {
        name: 'Baptiste',
        category: 'Support',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/baptiste/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/baptiste/hero-select-portrait.png',
        description: 'Médico de combate de elite, armado com um arsenal de dispositivos de cura experimentais.'
    },
    {
        name: 'Bastion',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/hero-select-portrait.png',
        description: 'Um robô que se transforma e explora o mundo; fascinado pela natureza, porém cauteloso com a humanidade.'
    },
    {
        name: 'Brigitte',
        category: 'Support',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/brigitte/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/brigitte/hero-select-portrait.png',
        description: 'Uma paladina de armadura apaixonada por aventuras que adora ajudar os mais necessitados.'
    },
    {
        name: 'Cassidy',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/cassidy/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/cassidy/hero-select-portrait.png',
        description: 'Um pistoleiro fora da lei que faz justiça com seus próprios termos.'
    },
    {
        name: 'D.Va',
        category: 'Tank',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/dva/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/dva/hero-select-portrait.png',
        description: 'Essa ex-gamer profissional transformada em piloto de mecha de última geração na defesa de sua cidade natal.'
    },
    {
        name: 'Doomfist',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/doomfist/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/doomfist/hero-select-portrait.png',
        description: 'Um estrategista que usa sua inteligência, seu carisma e força bruta para construir um mundo mais forte.'
    },
    {
        name: 'Echo',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/echo/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/echo/hero-select-portrait.png',
        description: 'Robô evolutivo programado com uma inteligência artificial de rápida adaptação, Echo representa a mais avançada tecnologia.'
    },
    {
        name: 'Genji',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/hero-select-portrait.png',
        description: 'Um ciborgue ninja e guerreiro mortal que fez as pazes com seu corpo mecânico.'
    },
    {
        name: 'Hanzo',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/hero-select-portrait.png',
        description: 'Um arqueiro e assassino mortal sem igual.'
    },
    {
        name: 'Junkrat',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/hero-select-portrait.png',
        description: 'Um lunático obcecado por explosivos que vive para causar destruição e caos.'
    },
    {
        name: 'Lúcio',
        category: 'Support',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/hero-select-portrait.png',
        description: 'Uma celebridade internacional que luta pela mudança social através de suas músicas e ações.'
    },
    {
        name: 'Mei',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mei/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mei/hero-select-portrait.png',
        description: 'Uma especialista em manipulação climática que luta pela preservação do meio ambiente.'
    },
    {
        name: 'Mercy',
        category: 'Support',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/hero-select-portrait.png',
        description: 'Um anjo da guarda, uma curandeira sem igual, cientista brilhante e defensora convicta da paz.'
    },
    {
        name: 'Moira',
        category: 'Support',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/moira/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/moira/hero-select-portrait.png',
        description: 'Uma brilhante geneticista que busca pela descoberta científica sem restrições éticas.'
    },
    {
        name: 'Orisa',
        category: 'Tank',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/orisa/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/orisa/hero-select-portrait.png',
        description: 'Uma defensora da paz, feita para defender o povo de Numbani.'
    },
    {
        name: 'Pharah',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/hero-select-portrait.png',
        description: 'Uma oficial condecorada que patrulha os céus em sua armadura de combate Raptora experimental.'
    },
    {
        name: 'Reaper',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/reaper/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/reaper/hero-select-portrait.png',
        description: 'Um mercenário e assassino sem escrúpulos que caça antigos agentes da Overwatch.'
    },
    {
        name: 'Reinhardt',
        category: 'Tank',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/hero-select-portrait.png',
        description: 'Um campeão de eras passadas que vive pelos nobres códigos do valor, da justiça e da coragem.'
    },
    {
        name: 'Roadhog',
        category: 'Tank',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/roadhog/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/roadhog/hero-select-portrait.png',
        description: 'Um matador sanguinário com uma força extraordinária e conhecido por sua crueldade e destruição gratuita.'
    },
    {
        name: 'Sigma',
        category: 'Tank',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/sigma/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/sigma/hero-select-portrait.png',
        description: 'Astrofísico excêntrico que um experimento orbital catastrófico transformou em arma ambulante.'
    },
    {
        name: 'Soldado: 76',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/hero-select-portrait.png',
        description: 'Um vigilante que vai lutar até o fim para entregar os inimigos da Overwatch nas mãos da justiça.'
    },
    {
        name: 'Sombra',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/sombra/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/sombra/hero-select-portrait.png',
        description: 'Uma hacker famosa, na busca por segredos e o poder que eles trazem.'
    },
    {
        name: 'Symmetra',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/hero-select-portrait.png',
        description: 'Symmetra literalmente dobra a realidade com construtos de luz sólida.'
    },
    {
        name: 'Torbjörn',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/hero-select-portrait.png',
        description: 'Um habilidoso engenheiro que projeta sistemas de armas no campo de batalha.'
    },
    {
        name: 'Tracer',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/hero-select-portrait.png',
        description: 'Uma ex-agente da Overwatch, aventureira que salta no tempo e uma força incontrolável para o bem.'
    },
    {
        name: 'Widowmaker',
        category: 'Damage',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/hero-select-portrait.png',
        description: 'Uma assassina perfeita: paciente e impiedosamente eficiente que não mostra emoção nem remorso.'
    },
    {
        name: 'Winston',
        category: 'Tank',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/winston/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/winston/hero-select-portrait.png',
        description: 'Um gorila geneticamente modificado altamente inteligente, cientista brilhante e herói com um potencial humano.'
    },
    {
        name: 'Wrecking Ball',
        category: 'Tank',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/wrecking-ball/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/wrecking-ball/hero-select-portrait.png',
        description: 'Esse tanque rolante é pilotado por um hamster da Lua geneticamente modificado.'
    },
    {
        name: 'Zarya',
        category: 'Tank',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/hero-select-portrait.png',
        description: 'Uma das mulheres mais fortes do mundo que sacrificou o triunfo pessoal para proteger seu país.'
    },
    {
        name: 'Zenyatta',
        category: 'Support',
        fullBodyURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/full-portrait.png',
        iconURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/hero-select-portrait.png',
        description: 'Um monge ômnico que vagueia pelo mundo em busca de iluminação espiritual.'
    }
];


const iconHeroes = document.querySelector('.icon_heroes')

const tankButton = document.querySelector('.heroe_tank')
const supportButton = document.querySelector('.heroe_support')
const damageButton = document.querySelector('.heroe_damage')

var Tank = Heroes.filter(heroTank => heroTank.category === 'Tank');
var Support = Heroes.filter(heroSupport => heroSupport.category === 'Support');
var Damage = Heroes.filter(heroDamage => heroDamage.category === 'Damage');


const filterHeroes = function(list) {
    
    tankButton.classList.remove('active')
    supportButton.classList.remove('active')
    damageButton.classList.remove('active')
    
    this.classList.add('active')
    
    iconHeroes.innerHTML = ''
    list.forEach(setHeroIcon)
}


tankButton.onclick = filterHeroes.bind(tankButton, Tank)
supportButton.onclick = filterHeroes.bind(supportButton, Support)
damageButton.onclick = filterHeroes.bind(damageButton, Damage)


function iconButton(heroe){

    const btn = document.createElement('button')
    btn.classList.add('icon_heroe_name')
    btn.setAttribute('onmouseover', `createHeroDescritption('${heroe}')`)
    
    var img = document.createElement('img')
    img.setAttribute('src', heroe.iconURL)
    var span = document.createElement('span')
    span.innerHTML = heroe.name

    btn.appendChild(img)
    btn.appendChild(span)

    return btn
}


const setHeroIcon = (heroe) =>  iconHeroes.appendChild(iconButton(heroe))
const createIcon = () =>  Heroes.forEach(setHeroIcon)


function createHeroDescritption(heroe) {
    
    var img = document.querySelector('.heroe_selected')
    img.setAttribute('src', heroe.fullBodyURL)

    var nameHero = document.querySelector('.hero_name')
    nameHero.innerHTML = heroe.name

    var descriptionHero = document.querySelector('.hero_description')
    descriptionHero.innerHTML = heroe.description
}


createIcon()
createHeroDescritption(Heroes[28])


 



