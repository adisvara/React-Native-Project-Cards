import { View, Image, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactLists from './components/ContactLists'


export default function App(){
  return (

    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <ElevatedCards/>
      <FancyCards/>
      <ContactLists/>
      <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

