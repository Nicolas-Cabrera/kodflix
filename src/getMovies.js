import breakingbad from './Images/breakingbad.jpg'
import casadepapel from './Images/casadepapel.jpg'
import harrypotter from './Images/harrypotter.jpg'
import insidious from './Images/insidious.jpg'
import theflash from './Images/theflash.jpg'
import xmen from './Images/xmen.jpg'

//Creates array to add movies

export default function getMovies() {
    return [
        { id: 'breakingbad', name: 'Breaking Bad', logo: breakingbad, year:'2019', details: 'Mild-mannered high school chemistry teacher Walter White thinks his life cant get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. But Walter is dumbstruck when he learns he has terminal cancer. Realizing that his illness probably will ruin his family financially, Walter makes a desperate bid to earn as much money as he can in the time he has left by turning an old RV into a meth lab on wheels.' },
        { id: 'casadepapel', name: 'Casa De Papel', logo: casadepapel, year:'2019', details: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.' },
        { id: 'hp', name: 'Harry Potter', logo: harrypotter, year:'2019', details: 'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.' },
        { id: 'insidious', name: 'Insidious', logo: insidious, year:'2019', details: 'Parents (Patrick Wilson, Rose Byrne) take drastic measures when it seems their new home is haunted and their comatose son (Ty Simpkins) is possessed by a malevolent entity.' },
        { id: 'flash', name: 'The Flash', logo: theflash, year:'2019', details: 'At 11, Barry Allens life changed completely when his mother died in a freak accident and his innocent father was convicted of her murder. Orphaned Barry later becomes Detective Joe West. Now a crime-scene investigator, his dedication to learn the truth about his mothers death drives him to follow up on every new scientific advancement and urban legend. When his latest obsession - a particle accelerator heralded as a world-changing invention - causes an explosion, it creates a freak storm and Barry is struck by lightning. He awakes from a coma nine months later with the power of superspeed. When he learns that others who have gained powers use them for evil, he dedicates himself to protecting the innocent, while still trying to solve the older mystery.' },
        { id: 'xmen', name: 'X-Men', logo: xmen, year:'2019', details: 'The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when shes hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Greys new abilities to rule the galaxy' }
    ];
}