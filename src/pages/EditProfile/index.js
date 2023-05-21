import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {dummyProfile} from '../../data';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {Inputan, Pilihan, Tombol} from '../../components';
import {getProfile, updateProfile} from '../../api';
export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
    };
  }
  async componentDidMount() {
    const profileData = await getProfile();
    console.log('profile: ', profileData);
    this.setState({profile: profileData});
  }
  async tryEditProfile() {
    const {navigation} = this.props;
    const res = await updateProfile(this.state.profile);
    if (res) {
      navigation.replace('MainApp');
    }
  }
  handleNameChange = (val) => {
    this.setState({
      profile : {...this.state.profile, nama: val},
    });
  };
  handleNomorHpChange = (val) => {
    this.setState({
      profile : {...this.state.profile, nohp: val},
    });
  };
  handleAlamatChange = (val) => {
    this.setState({
      profile : {...this.state.profile, alamat: val},
    });
  };
  render() {
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inputan label="Nama" value={this.state.profile.nama} onChangeText={this.handleNameChange}/>
          <Inputan label="Email" value={this.state.profile.email} editable={false} />
          <Inputan label="No. Handphone" value={this.state.profile.nohp} onChangeText={this.handleNomorHpChange}/>
          <Inputan label="Alamat" value={this.state.profile.alamat} textarea onChangeText={this.handleAlamatChange}/>

          <View style={styles.submit}>
            <Tombol
              title="Submit"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(15)}
              fontSize={18}
              onPress = {async () => await this.tryEditProfile()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  inputFoto: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40,
  },
  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1,
  },
  submit: {
    marginVertical: 30,
  },
});
