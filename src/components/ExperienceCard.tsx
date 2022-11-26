import { Box, Center, Flex, GridItem } from "@chakra-ui/react"
import { ReactComponent as RakutenLogo } from '../assets/img/rakuten.svg'
import { ReactComponent as NASALogo } from '../assets/img/nasa.svg'

function getCompanySvg(programmingLanguage: string, w: string, h: string) {
    if (programmingLanguage === 'rakuten') return <RakutenLogo width={w} height={h} />
    if (programmingLanguage === 'nasaLangley') return <NASALogo width={w} height={h} />
    if (programmingLanguage === 'nasaAmes') return <NASALogo width={w} height={h} />
};

type ProjectCardProps = {
    title: string,
    description: string,
    logo: string,
    date: string,
    selectedTab: string,
}

export const ExperienceCard = (props: ProjectCardProps) => {
    return (
        <GridItem h='400px'>
            <Flex direction='column' className="proj-imgbx">
                <Center opacity={props.logo === props.selectedTab?'1':'0.3'}>
                    {getCompanySvg(props.logo, '300px', '300px')}
                </Center>
                <Center fontWeight={props.logo === props.selectedTab?'bold':'normal'} opacity={props.logo === props.selectedTab?'1':'0.3'} className='experience-title'>{props.title}</Center>
                <div className="proj-txtx">
                    <h4>{props.description}</h4>
                    <span>{props.date}</span>
                </div>
            </Flex>
        </GridItem>
    )
}
