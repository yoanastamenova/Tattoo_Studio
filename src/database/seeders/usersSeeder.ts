import bcrypt from 'bcrypt';
import { AppDataSource } from "../db";
import { User } from "../models/User";

export const usersSeeder = async () => {
    try {
        await AppDataSource.initialize();
        
        const user1 = new User();
        user1.id = 1;
        user1.email = "yoana@banana.com";
        user1.password_hash = bcrypt.hashSync("123456789", 12);
        user1.role_id = 2;
        user1.specialization = "Piercing",
        user1.bio = "From my teen years I loved all kinds of earrings everywhere and on every place of the body. This motivated me to be become a piercing artist. Now I have 5 years of experience and more than 300 piercings made.";
        user1.style = "Piercing and Piercing Removal"
        await user1.save();

        const user2 = new User();
        user2.id = 2;
        user2.email = "morena@morepe.com";
        user2.password_hash = bcrypt.hashSync("princess", 12);
        user2.role_id = 2;
        user2.specialization = "Tattoo";
        user2.bio = "I became passioned from drawing and decided to move this passion into something more permanent. This is how I started doing tattoos, experimenting and conquering the world of fine line was one of the best decisions I ever made.";
        user2.style = "Fine line"
        await user2.save();

        const user3 = new User();
        user3.id = 3;
        user3.email = "dani@dani.com";
        user3.password_hash = bcrypt.hashSync("000000000", 12);
        user3.role_id = 1
        await user3.save();

        const user4 = new User();
        user4.id = 4;
        user4.email = "lina@nobleart.com";
        user4.password_hash = bcrypt.hashSync("123456789", 12);
        user4.role_id = 2;
        user4.specialization = "Tattoo";
        user4.bio = "It has always been my goal to be a multifaceted artist and tattooing was one of the facets I would like to master.";
        user4.style = "Neotraditional";
        await user4.save();

        const user5 = new User();
        user5.id = 5;
        user5.email = "simon@nobleart.com";
        user5.password_hash = bcrypt.hashSync("123456789", 12);
        user5.role_id = 2;
        user5.specialization = "Tattoo";
        user5.bio = "I bought my first machine just to try it out and I was so fascinated by it that I wouldn't trade it for anything today.";
        user5.style = "Microrealism";
        await user5.save();

        console.log("===========================");
        console.log("Users seeder executed successfully");
        console.log("===========================");
        
    } catch (error: any) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("----------------------");
        console.error('Error in users seeder execution:', message);
        console.error("----------------------");

    } finally {
        await AppDataSource.destroy();
    }
}