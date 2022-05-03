import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  header: {
    position: 'absolute',
    left: '4.44%',
    right: '15.83%',
    top: '11.88%',
    color: 'black',
    bottom: '67.33%',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 1,
    fontFamily: 'BRCombine-Black',
    // eslint-disable-next-line no-dupe-keys
    color: '#202020'
  },

  container: {
    position: 'relative',
    width: 360,
    height: 101,
    borderColor: 'grey',
    borderWidth: 2,
    margin: 3
  },

  selection_slider: {
    borderRadius: 0,
    position: 'absolute',
    left: 0,
    top: '44.59%'
  },

  selection_list: {
    display: 'flex',
    flexDirection: 'row',
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },

  selection_btn: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginLeft: 8,
    paddingLeft: 8,
    paddingRight: 8,
    borderColor: '#E9E9E9',
    borderWidth: 1
  },

  default_btn_text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '300',
    fontStyle: 'normal',
    fontFamily: 'MundialBlack.otf'
  },

  submit_btn: {
    borderRadius: 30,
    margin: 10,
    width: '50%',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#E9E9E9',
    // eslint-disable-next-line no-dupe-keys
    borderRadius: 30
  },

  active_btn: {
    borderColor: 'green',
    borderWidth: 3
  }
})

export default styles
