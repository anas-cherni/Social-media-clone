import React from 'react'
import StoryCard from './StoryCard'
import { useSession } from 'next-auth/react'
import omarC from "./assets/omar-cover.jpg"
import omarP from "./assets/omar-profile.jpg"
import haniC from "./assets/hani-cover.jpg"
import haniP from "./assets/hani-profile.jpg"
function Stories() {
    const { data: session } = useSession();
    const stories = [
        {
            name: session.user.name,
            src: "https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-9/75429463_1244995002369073_3287125495979704320_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=UYltzMw0XXwAX_c0MrB&_nc_ht=scontent.ftun8-1.fna&oh=00_AT9Qq9kURIAFMK75BKI-VW7prkcOolt3l-sK8YxYtz8xLw&oe=62D3898C",
            profile: session.user.image,
        },
        {
            name: "Omar Jabloun",
            src: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/240604818_3040512666168527_969098138526639532_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_ohc=fKPuVX2bLnkAX9WpvVh&_nc_ht=scontent.ftun8-1.fna&oh=00_AT8g8JpbiG4rxCK_ktFdkyttElvzcoK3C_Eb8DU3WOgNtg&oe=62B34B21",
            profile: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/272196065_3148829882003471_5478759959919681564_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_cSSS3hkYIoAX-Xgh7g&_nc_ht=scontent.ftun8-1.fna&oh=00_AT-6sP1DF_-KaDn1JcZYL2ArRabKrfhySmiRQCUjZ7ZX_g&oe=62B2425E",
        },
        {
            name: "Hani Haddad",
            src: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/240727983_4511593565550043_6380262937968195827_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=x01fyPO2lwoAX-drHV0&tn=3U2KLPcY_0cXX9CB&_nc_ht=scontent.ftun8-1.fna&oh=00_AT_DzCKICCbznsp3df8AunogK8XSfkahzOJesKjxIPch5g&oe=62B321DD",
            profile: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/278671742_5260145357361523_7704390820954146876_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eUZKaO8bp2UAX-Wi-qP&_nc_ht=scontent.ftun8-1.fna&oh=00_AT9H5fjcQbMXy6DRmEZ5_J880g9zchVqiasGJzGR_-ge6w&oe=62B37A77",
        },
        {
            name: "Habib Sellami",
            src: "https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-9/37869194_1666440276787238_5992584726408331264_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=19026a&_nc_ohc=BMVC_AWFHckAX_i0m9I&tn=3U2KLPcY_0cXX9CB&_nc_ht=scontent.ftun8-1.fna&oh=00_AT8yz0uVjSCMZKMIvAIBX714fByGL_JHNgMZCVQNQfqZDw&oe=62D2653C",
            profile: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/282671795_4984846418279924_2745956316208706609_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0R5SleA1_GsAX_kFbyW&tn=3U2KLPcY_0cXX9CB&_nc_ht=scontent.ftun8-1.fna&oh=00_AT9GinJIx-qAGR7Eq5iqphr1R9FxcePOhiTbR-o4AvN18A&oe=62B27CD6",
        },
        {
            name: "Med Ali Ouachani",
            src: "https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-9/199687241_4251799168220677_1846399018585667727_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=19026a&_nc_ohc=EiVgx_K_FuEAX-OaZ1S&_nc_ht=scontent.ftun8-1.fna&oh=00_AT85JLv0Z5KDccvphZ5M7KfITkNJWAXop4mzj9DubhUC6Q&oe=62D2501F",
            profile: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/240786682_4468119273255331_8760949878734563378_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0FLcEBQgfKEAX9ldXzq&_nc_ht=scontent.ftun8-1.fna&oh=00_AT_N7bOvqWugl7XwgIyX93fS6LMBDz8gHc3sqpgaqDnCpQ&oe=62B2EC5E",
        },

    ];


    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard
                    name={story.name}
                    src={story.src}
                    profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
