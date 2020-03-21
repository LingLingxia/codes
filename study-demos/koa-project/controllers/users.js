const User = require('../models/users');
const jwt = require('jsonwebtoken');
const { secret } = require('../config');
class UsersCtl {
  async find(ctx){
    ctx.body = await User.find();
  }
  async findById(ctx){
    const { fields } = ctx.query;
    console.log(fields);
    const selectFields = fields.split(';').filter(f=>f).map(f=>' +'+f).join('');//字段之间要加空格
    const user = await User.findById(ctx.params.id).select(selectFields);
    if(!user){
      ctx.throw(404,'用户不存在');
    }
    ctx.body = user;
    }
    async create(ctx){
      ctx.verifyParams({
        name:{type:'string',required:true},
        password:{type:'string',required:true},
        avatar_url:{type:'string',required:false},
        gender:{type:'string',required:false},
        headline:{type:'string',required:false},
        locations:{type:'array',itemType:'string',required:false},
        business:{type:'string',required:false},
        employments:{type:'array',itemType:'object',required:false},
        educations:{type:'array',itemType:'object',required:false},
      })
      const {name} = ctx.request.body;
      const repeatedUser = await User.findOne({name});
      if(repeatedUser){
        ctx.throw(409,'用户已存在');
      }
     const user =  await new User(ctx.request.body).save()
     ctx.body = user;
    }
    async update(ctx){
      ctx.verifyParams({
        name:{ type:'string',required:false },
        password:{type:'string',require:false}
      })
     const user = await User.findByIdAndUpdate(ctx.params.id,ctx.request.body);
  
     if(!user){ ctx.throw(404);}
     ctx.body = user;
    }
    async del(ctx){
      const user = await User.findByIdAndRemove(ctx.params.id);
      if(!user){ ctx.throw(404);}
      ctx.body='删除成功';
    }
    async login(ctx){
      ctx.verifyParams({
        name:{type:'string',required:true},
        password:{type:'string',required:true}
      })
      const user = await User.findOne(ctx.request.body);
      if(!user){
        ctx.throw(401,'用户名或密码不正确');
      }
      const {_id,name} = user;
      const token = jwt.sign({_id,name},secret,{expiresIn:'1d'});
      ctx.body = {token};
    }
    async checkOwner(ctx,next){
      if(ctx.params.id != ctx.state.user._id){
        ctx.throw(403,'无权限');
      }
      await next();
    }

    //获取粉丝列表,实际上是一个请求用户列表的接口，限定条件为关注了ctx.params.id,
    //不明白为什么这样写是包含关系而不是等于关系
    async listFollowers(ctx,next){
      const users = await User.find({followings:ctx.params.id});
      ctx.body = users;
    }
    async listFollowings(ctx,next){
      //不加populate的话 就只查出来一个id，查出来的还是这个user，但是会用用户信息填充user.followings
       const user = await User.findById(ctx.params.id).select('+followings').populate('followings');
       ctx.body = user.followings;
       next();
    }
    async follow(ctx,next){
      //followings是我关注的人
     const me = await User.findById(ctx.state.user._id).select('+followings');
     if(!me.followings.map(f=>f.toString()).includes(ctx.params.id)){
       me.followings.push(ctx.params.id);
       me.save()
     }
     console.log('成功');
     ctx.status = 204;
    }
    async unfollow(ctx,next){//取关
      const me = await User.findById(ctx.state.user._id).select('+followings');
      const index = me.followings.map(f=>f.toString()).indexOf(ctx.params.id)
      if(index>-1){
        me.followings.splice(index,1);
        me.save()
      }
      ctx.status = 204;
    }
    async checkUserExist(ctx,next){
      const user = await User.findById(ctx.params.id);

      if(!user){
        ctx.throw(404,'用户不存在');
      }
    await next();//为什么不加这个await会返回404
    }
  }
  module.exports = new UsersCtl();