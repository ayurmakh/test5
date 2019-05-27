const Router = require('koa-router');
const router = new Router();
const db = require('../database/db');
const render = require('../render');
const app = require('../app');
const bodyParser = require('koa-bodyparser');

app.use(render);
app.use(bodyParser());
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  await next();
});

router.get('/', async (ctx) => {
	await ctx.render('index');
});

router.post('/signin', async (ctx) => {
	var userData = ctx.request.body;
	console.log(ctx.request.body);
	var res = await db.get(userData.login, userData.pass);
	/*if (res.result)
		await ctx.render('signinSucc');
	else
		await ctx.render('signinDeny');	*/
	if (res.result)
		ctx.body = { result: true};
	else
		ctx.body = { result: false};
});

router.get('/signin', async (ctx) => {
	await ctx.render('signin');
});

router.post('/signup', async (ctx) => {
	var userData = ctx.request.body;
	var res = await db.add(userData.name, userData.login, userData.pass);
	/*if (res.result)
		await ctx.render('signupSucc');
	else
		await ctx.render('signupDeny');	*/
	if (res.result)
		ctx.body = { result: true};
	else
		ctx.body = { result: false};
});

router.get('/signup', async (ctx) => {
	await ctx.render('signup');
});

router.get('/users', async (ctx) => {
	ctx.body = await db.list();
});

module.exports = router;