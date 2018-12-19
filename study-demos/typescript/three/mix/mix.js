
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'MyMixin',
  components: {

  }
})


export default class MyMixin extends Vue{
  mixinValue = 'Hello-I-AM-MIXIN'

}