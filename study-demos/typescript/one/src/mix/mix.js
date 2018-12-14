import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MyMixin extends Vue{
  mixinValue = 'Hello-I-AM-MIXIN'

}