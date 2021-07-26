import React, {useState} from 'react';

import {
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';


const LoginModal = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{flex:1, backgroundColor: 'rgba(52, 52, 52, 0.9)', opacity: 1}}>
          <Pressable style={{padding: 10}} onPress={()=> setModalVisible(!modalVisible)}>
            <Text style={{alignSelf: 'flex-end', color: 'white', marginRight: 10, fontSize: 25}}>྾</Text>
          </Pressable>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
              <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Currently logged in user</Text>
              </View>
              <View style={{alignSelf: 'flex-end', padding: 10, margin: 10, borderRadius: 5, borderWidth: 1, backgroundColor: '#dbdbdb', borderColor: '#dbdbdb'}}>
                <Text style={{fontSize: 17}}>➱ Login</Text>
              </View>
              <View style={{margin: 10, marginTop: 0}}>
                <Text style={{fontSize: 20, color: '#363636'}}>User</Text>
                <TextInput style={{backgroundColor: 'white', margin: 10, borderRadius: 10}}/>
              </View>
              <View style={{margin: 10, marginTop: 0}}>
                <Text style={{fontSize: 20, color: '#363636'}}>Password</Text>
                <TextInput style={{backgroundColor: 'white', margin: 10, borderRadius: 10}}/>
              </View>
            </View>
            <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
              <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Change password</Text>
              </View>
              <View style={{alignSelf: 'flex-end', padding: 10, margin: 10, borderRadius: 5, borderWidth: 1, backgroundColor: '#dbdbdb', borderColor: '#dbdbdb'}}>
                <Text style={{fontSize: 17}}>⇄ Change password</Text>
              </View>
              <View style={{margin: 10, marginTop: 0}}>
                <Text style={{fontSize: 20, color: '#363636'}}>Old password</Text>
                <TextInput style={{backgroundColor: 'white', margin: 10, borderRadius: 10}}/>
              </View>
              <View style={{margin: 10, marginTop: 0}}>
                <Text style={{fontSize: 20, color: '#363636'}}>New password</Text>
                <TextInput style={{backgroundColor: 'white', margin: 10, borderRadius: 10}}/>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
  )
}
export default LoginModal;