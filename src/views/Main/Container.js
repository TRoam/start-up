import React from 'react'

import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'

import styles from './styles.modules.css'

export class Container extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Sildbar
           title={'From Here'}
         />
        <div className={styles.content}>
        </div>
        // <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=wFzb51HdoSmEBsMt5rCzrFxwyrdDs6Di"></script>
        Hello from the container
      </div>
    )
  }
}

export default Container
