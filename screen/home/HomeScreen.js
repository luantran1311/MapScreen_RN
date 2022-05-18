import { View, Text, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import AppBar from './component/AppBar'
import Categories from './component/Categories'
import styles from './styles/styles'
import Menu from './component/Menu'
import {menuData} from '../../common/Contant'

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Categories />
      <Menu />
    </SafeAreaView>
  )
}