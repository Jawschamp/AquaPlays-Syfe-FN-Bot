/*
______ _____  _____   ____  _____     __          __  _______ _____ _    _  __      _______ _____  ______ ____    ______ ____  _____    ______ _______   ________  _____
|  ____|  __ \|  __ \ / __ \|  __ \    \ \        / /\|__   __/ ____| |  | | \ \    / /_   _|  __ \|  ____/ __ \  |  ____/ __ \|  __ \  |  ____|_   _\ \ / /  ____|/ ____|
| |__  | |__) | |__) | |  | | |__) |    \ \  /\  / /  \  | | | |    | |__| |  \ \  / /  | | | |  | | |__ | |  | | | |__ | |  | | |__) | | |__    | |  \ V /| |__  | (___
|  __| |  _  /|  _  /| |  | |  _  /      \ \/  \/ / /\ \ | | | |    |  __  |   \ \/ /   | | | |  | |  __|| |  | | |  __|| |  | |  _  /  |  __|   | |   > < |  __|  \___ \
| |____| | \ \| | \ \| |__| | | \ \ _     \  /\  / ____ \| | | |____| |  | |    \  /   _| |_| |__| | |___| |__| | | |   | |__| | | \ \  | |     _| |_ / . \| |____ ____) |
|______|_|  \_\_|  \_\\____/|_|  \_( )     \/  \/_/    \_\_|  \_____|_|  |_|     \/   |_____|_____/|______\____/  |_|    \____/|_|  \_\ |_|    |_____/_/ \_\______|_____/
                                  |/
*/
console.log("")
console.log("   █████╗  ██████╗ ██╗   ██╗ █████╗      █████╗ ███╗   ██╗██████╗     ███████╗██╗   ██╗███████╗███████╗███████╗    ██╗      ██████╗ ██████╗ ██████╗ ██╗   ██╗    ██████╗  ██████╗ ████████╗")
console.log("  ██╔══██╗██╔═══██╗██║   ██║██╔══██╗    ██╔══██╗████╗  ██║██╔══██╗    ██╔════╝╚██╗ ██╔╝██╔════╝██╔════╝██╔════╝    ██║     ██╔═══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔═══██╗╚══██╔══╝")
console.log("  ███████║██║   ██║██║   ██║███████║    ███████║██╔██╗ ██║██║  ██║    ███████╗ ╚████╔╝ █████╗  █████╗  ███████╗    ██║     ██║   ██║██████╔╝██████╔╝ ╚████╔╝     ██████╔╝██║   ██║   ██║   ")
console.log("  ██╔══██║██║▄▄ ██║██║   ██║██╔══██║    ██╔══██║██║╚██╗██║██║  ██║    ╚════██║  ╚██╔╝  ██╔══╝  ██╔══╝  ╚════██║    ██║     ██║   ██║██╔══██╗██╔══██╗  ╚██╔╝      ██╔══██╗██║   ██║   ██║   ")
console.log("  ██║  ██║╚██████╔╝╚██████╔╝██║  ██║    ██║  ██║██║ ╚████║██████╔╝    ███████║   ██║   ██║     ███████╗███████║    ███████╗╚██████╔╝██████╔╝██████╔╝   ██║       ██████╔╝╚██████╔╝   ██║   ")
console.log("  ╚═╝  ╚═╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝     ╚══════╝   ╚═╝   ╚═╝     ╚══════╝╚══════╝    ╚══════╝ ╚═════╝ ╚═════╝ ╚═════╝    ╚═╝       ╚═════╝  ╚═════╝    ╚═╝   ")
console.log("                                                                                                                                                                                           ")

const EGClient = require('epicgames-client').Client;
const Fortnite = require('epicgames-fortnite-client');
const { ESubGame } = Fortnite;
let eg = new EGClient({
  email: "FNGQFN@gmail.com",
  password: "",
  debug: console.log,
  });
  eg.init().then(async (success) => {
    console.log("Client startup successful")
    if(!success)
      throw new Error('Cannot initialize EpicGames launcher.');
    if(!await eg.login())
      throw new Error('Cannot login on EpicGames account.');
      const fortnite = await eg.runGame(Fortnite, {
  netCL: '7681591',
  partyBuildId: '1:1:7681591',
  });
  console.log("Parsed partyBuildId and netCL")
  console.log("Setting EGClient subgame to BattleRoyale")
    const br = await fortnite.runSubGame(ESubGame.BattleRoyale);
    console.log("Set EGClient subgame to BattleRoyale")
    fortnite.communicator.on('party:member:joined', async (member) => {
      console.log("Parsing invite join request")
      console.log(`Member#${member.id} joined!`);
      console.log(`Members count: ${fortnite.party.members.length}`);
      console.log(`Setting client party outfits to Member#${member.id}`)
      fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_313_Athena_Commando_M_KpopFashion.CID_313_Athena_Commando_M_KpopFashion");
      fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/BID_138_Celestial.BID_138_Celestial");
      fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_Breakboy.EID_Breakboy");
      fortnite.party.me.setBattlePass(true, 99999999999999999999999999999999999999999999999999999999999, 420, 99999999999999999999999999999999999999999999999999999999999);
    });
    fortnite.communicator.on('party:invitation', async (invitation) => {
      console.log("Party invitation found")
      current_party = invitation.party;
      await invitation.accept()
      console.log("Party invitation accepted")
    });
    fortnite.communicator.on('friend:request', async (friendops) => {
        console.log("Recieved friend request from " + friendops.friend.id)
        eg.acceptFriendRequest(friendops.friend.id)
        console.log("Sucessfully accepted " + friendops.friend.id + " friend request")
    });
    });
