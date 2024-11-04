// Definição da classe Heroi
class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // Método para atacar
    atacar() {
        let ataque;
        // Switch case para definir o ataque com base no tipo
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque aleatório';
        }
        // Mensagem de ataque
        console.log(`${this.nome} que é um ${this.tipo}, atacou usando ${ataque}!`);
    }
}
// Função de simulação o jogo
function jogar() {
    const herois = [
        new heroi('Stof', 300, 'mago'),
        new heroi('Purfy', 30, 'guerreiro'),
        new heroi('Keroi', 25, 'monge'),
        new heroi('Natichi', 22, 'ninja')
    ];
    // Repetição para cada herói atacar
    for (let i = 0; i < herois.length; i++) {
        herois[i].atacar();
    }
}
// Iniciando o jogo
jogar();