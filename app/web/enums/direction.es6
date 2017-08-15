import Enum from '../core/enum.es6'

class Direction extends Enum {}

Direction.build(Direction, {
  PREV: "previous",
  NEXT: "next"
})

export default Direction
