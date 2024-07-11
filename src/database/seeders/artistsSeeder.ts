// import bcrypt from 'bcrypt';
// import { AppDataSource } from "../db";
// import { Artist } from '../models/Artist';

// export const artistSeeder = async () => {
//     try {
//         await AppDataSource.initialize();
        
//         const artist1 = new Artist();
//         artist1.id = 1;
//         artist1.email = "dina@nobleart.com";
//         artist1.password_hash = bcrypt.hashSync("123456789", 12);
//         artist1.role_id = 2;
//         artist1.specialization = "Piercing",
//         artist1.bio = "From my teen years I loved all kinds of earrings everywhere and on every place of the body. This motivated me to be become a piercing artist. Now I have 5 years of experience and more than 300 piercings made.";
//         artist1.style = "Piercing and Piercing Removal"
//         await artist1.save();

//         const artist2 = new Artist();
//         artist2.id = 2;
//         artist2.email = "travis@nobleart.com";
//         artist2.password_hash = bcrypt.hashSync("princess", 12);
//         artist2.role_id = 2;
//         artist2.specialization = "Tattoo";
//         artist2.bio = "I became passioned from drawing and decided to move this passion into something more permanent. This is how I started doing tattoos, experimenting and conquering the world of fine line was one of the best decisions I ever made.";
//         artist2.style = "Fine line"
//         await artist2.save();

//         const artist3 = new Artist();
//         artist3.id = 3;
//         artist3.email = "nina@nobleart.com";
//         artist3.password_hash = bcrypt.hashSync("123456789", 12);
//         artist3.role_id = 2;
//         artist3.specialization = "Tattoo";
//         artist3.bio = "I became passioned from drawing and decided to move this passion into something more permanent. This is how I started doing tattoos, experimenting and conquering the world of fine line was one of the best decisions I ever made.";
//         artist3.style = "Relism"
//         await artist3.save();

//         const artist4 = new Artist();
//         artist4.id = 4;
//         artist4.email = "lina@nobleart.com";
//         artist4.password_hash = bcrypt.hashSync("123456789", 12);
//         artist4.role_id = 2;
//         artist4.specialization = "Tattoo";
//         artist4.bio = "It has always been my goal to be a multifaceted artist and tattooing was one of the facets I would like to master.";
//         artist4.style = "Neotraditional";
//         await artist4.save();

//         const artist5 = new Artist();
//         artist5.id = 5;
//         artist5.email = "simon@nobleart.com";
//         artist5.password_hash = bcrypt.hashSync("123456789", 12);
//         artist5.role_id = 2;
//         artist5.specialization = "Tattoo";
//         artist5.bio = "I bought my first machine just to try it out and I was so fascinated by it that I wouldn't trade it for anything today.";
//         artist5.style = "Microrealism";
//         await artist5.save();

//         console.log("===========================");
//         console.log("Users seeder executed successfully");
//         console.log("===========================");
        
//     } catch (error: any) {
//         const message = error instanceof Error ? error.message : String(error);
//         console.error("----------------------");
//         console.error('Error in users seeder execution:', message);
//         console.error("----------------------");

//     } finally {
//         await AppDataSource.destroy();
//     }
// }