import React, { Component } from 'react'
import { Navbar, ContentBlock, List, Icon, Badge, Button, Rate, Page } from 'components'
import styles from './index.less'

const { Element, Item } = List
const Title = ContentBlock.Title


export default class ListPage extends Component {
  render() {
    return (
      <Page className={styles.home}>
        <Navbar type="secondary" >
          List
        </Navbar>
        <Title>Default</Title>
        <List>
          <Item media={<Icon type="star" />}>
            <Element type="title">Ivan Petrov</Element>
            <Element type="after">
              <Badge bgColor="blue">New</Badge>
            </Element>
          </Item>
          <Item
            link="/"
            media={<Icon type="send" />}
          >
            <Element type="title">Ivan Petrov</Element>
            <Element type="after">
              CEO
            </Element>
          </Item>
        </List>
        <Title>Icon</Title>
        <List>
          <Item link media={<Icon img="http://oa5auszt6.bkt.clouddn.com/ic_mobile_network_settings.png" circle />}>
            <Element type="title">
              移动网络
            </Element>
          </Item>
          <Item link media={<Icon img="http://oa5auszt6.bkt.clouddn.com/ic_wifi_settings.png" circle />}>
            <Element type="title">
                WLAN
            </Element>
            <Element type="after">
                XIAOMI-wifi
            </Element>
          </Item>
          <Item link media={<Icon img="http://oa5auszt6.bkt.clouddn.com/ic_bluetooth_settings.png" circle />}>
            <Element type="title">
              蓝牙
            </Element>
            <Element type="after">
             已开启
            </Element>
          </Item>
          <Item link media={<Icon img="http://oa5auszt6.bkt.clouddn.com/ic_wifi_more_settings.png" circle />}>
            <Element type="title">
              其他连接方式
            </Element>
          </Item>
        </List>
        <Title>Without Icon</Title>
        <List>
          <Item link>
            <div className="item-title">
            蓝牙
            </div>
          </Item>
          <Item link>
            <div className="item-title">
            其他连接方式
            </div>
          </Item>
        </List>
        <Title>Middle Icon</Title>
        <List media>
          <Item media={<Icon link="http://oa5auszt6.bkt.clouddn.com/com.tencent.mm.png" radius size="70" />}>
            <div className="item-title">
              微信
            </div>
            <div className="item-title-row">
              <div className="item-text">
                 一个进程和2个服务
              </div>
              <div className="item-after">
                 20MB 11:01:38
              </div>
            </div>
          </Item>
          <Item media={<Icon link="http://oa5auszt6.bkt.clouddn.com/com.tencent.mobileqq.png" radius size="70" />}>
            <div className="item-title">
              QQ
            </div>
            <div className="item-title-row">
              <div className="item-text">
                 一个进程和2个服务
              </div>
              <div className="item-after">
                 20MB 11:01:38
              </div>
            </div>
          </Item>
          <Item media={<Icon link="http://oa5auszt6.bkt.clouddn.com/com.sina.weibo.png" radius size="70" />}>
            <div className="item-title">
              微博
            </div>
            <div className="item-title-row">
              <div className="item-text">
                 一个进程和2个服务
              </div>
              <div className="item-after">
                 20MB 11:01:38
              </div>
            </div>
          </Item>
          <Item media={<Icon link="http://oa5auszt6.bkt.clouddn.com/com.android.music.png" radius size="70" />}>
            <div className="item-title">
              音乐
            </div>
            <div className="item-title-row">
              <div className="item-text">
                 一个进程和2个服务
              </div>
              <div className="item-after">
                 20MB 11:01:38
              </div>
            </div>
          </Item>
        </List>
        <Title>Large Icon</Title>
        <List media>
          <Item
            extra={<Button small>打开</Button>}
            media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.tencent.mm.png" radius size="104" />}
          >
            <div className="item-title-row">
              <div className="item-title">
                微信
              </div>
            </div>
            <div className="item-text">
              <Rate small /><span>社交聊天</span><span className="split">|</span><span>46.9M</span><Badge small>广告</Badge>
            </div>
            <div className="item-text">
             奥莱购-品牌直销的线上奥莱
            </div>
          </Item>
          <Item
            extra={<Button small color="green">安装</Button>}
            media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.taobao.taobao.png" radius size="104" />}
          >
            <div className="item-title-row">
              <div className="item-title">
                手机淘宝
              </div>
            </div>
            <div className="item-text">
              <Rate value="3" small />
            </div>
            <div className="item-text">
             时尚购物 48.9M
            </div>

          </Item>
          <Item
            extra={<Button slot="extra" small color="green">下载</Button>}
            media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.sina.weibo.png" radius size="104" />}
          >
            <div className="item-title-row">
              <div className="item-title">
                微博
              </div>
            </div>
            <div className="item-text">
              <Rate value="5" small />
            </div>
            <div className="item-text">
             社交聊天 52.1M
            </div>
          </Item>
          <Item
            extra={<Button small>打开</Button>}
            media={<Icon img="http://oa5auszt6.bkt.clouddn.com/com.android.music.png" radius size="104" />}
          >
            <div className="item-title-row">
              <div className="item-title">
                音乐
              </div>
            </div>
            <div className="item-text">
              <Rate value="5" small />
            </div>
            <div className="item-text">
             影音视听 10.9M
            </div>

          </Item>
        </List>
      </Page>
    )
  }
}
