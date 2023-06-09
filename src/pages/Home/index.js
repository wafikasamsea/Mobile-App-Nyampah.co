import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  ListJerseys,
  ListLiga,
  Tombol,
} from '../../components';
import {colors, fonts} from '../../utils';
import {dummyJerseys, dummyLigas} from '../../data';
import { Jarak } from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ligas: dummyLigas,
      jerseys: dummyJerseys,
    };
    
  }
  // onClickCategory = (value) => {
  //   this.setState( prev => ({
  //     filteredJerseys: prev.jerseys.filter( jersey => jersey.liga.nama === value)
  //   })
  // }
  render() {
    const {ligas, jerseys} = this.state;
    const { navigation } = this.props
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation}/>
          <BannerSlider />
          <View style={styles.pilihLiga}>
            <Text style={styles.label}>Category</Text>
            <ListLiga ligas={ligas} />
          </View>

          <View style={styles.pilihJersey}>
            <ListJerseys jerseys={jerseys} navigation={navigation}/>

            <Tombol title="Lihat Semua" type="text" padding={7} />
          </View>

          <Jarak height={100}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  pilihLiga: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  pilihJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
