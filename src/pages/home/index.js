import React,{Component} from 'react'
import { Button, Page, Title} from 'components'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    constructor (props) {
      super(props)
    }

    render () {
        return (
          <div>
            <p>
              <Link to='/button'>button</Link>
            </p>
            <p>
              <Link to='/title'>title</Link>
            </p>
          </div>
        )
    }
}
