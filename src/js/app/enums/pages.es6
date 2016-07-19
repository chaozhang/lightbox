import Enum from '../core/enum.es6'

class Pages extends Enum {}

Pages.build(Pages, {
	HOME: "home",
	ABOUT: "about"
})

export default Pages
