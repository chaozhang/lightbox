import Enum from '../core/enum.es6'

class Page extends Enum {}

Page.build(Page, {
	HOME: "home",
	ABOUT: "about"
})

export default Page
