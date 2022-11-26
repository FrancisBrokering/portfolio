import { ReactComponent as PythonLogo } from '../assets/img/pythonLogo.svg'
import { ReactComponent as JavaScriptLogo } from '../assets/img/javascriptLogo.svg'
import { ReactComponent as TypeScriptLogo } from '../assets/img/typescriptLogo.svg'
import { ReactComponent as CLogo } from '../assets/img/cLogo.svg'
import { ReactComponent as CPlusPlusLogo } from '../assets/img/c++Logo.svg'
import { ReactComponent as CssLogo } from '../assets/img/cssLogo.svg'
import { ReactComponent as HtmlLogo } from '../assets/img/htmlLogo.svg'
import { ReactComponent as GoLogo } from '../assets/img/goLogo.svg'
import { ReactComponent as ReactLogo } from '../assets/img/reactLogo.svg'
import { ReactComponent as ReduxLogo } from '../assets/img/reduxLogo.svg'
import { ReactComponent as NodeLogo } from '../assets/img/nodeLogo.svg'

export default function getProgrammingLanguageSvg( programmingLanguage: string, w: string, h: string) {
    if (programmingLanguage === 'python') return <PythonLogo width={w} height={h} />
    if (programmingLanguage === 'go') return <GoLogo width={w} height={h} />
    if (programmingLanguage === 'javascript') return <JavaScriptLogo width={w} height={h} />
    if (programmingLanguage === 'typescript') return <TypeScriptLogo width={w} height={h} />
    if (programmingLanguage === 'c') return <CLogo width={w} height={h} />
    if (programmingLanguage === 'cpp') return <CPlusPlusLogo width={w} height={h} />
    if (programmingLanguage === 'css') return <CssLogo width={w} height={h} />
    if (programmingLanguage === 'html') return <HtmlLogo width={w} height={h} />
    if (programmingLanguage === 'react') return <ReactLogo width={w} height={h} />
    if (programmingLanguage === 'redux') return <ReduxLogo width={w} height={h} />
    if (programmingLanguage === 'node') return <NodeLogo width={w} height={h} />
};