/* 
 * Dependency inversion says you should not let high level modules 
 * (like the store class below) to depend on "low level" modules, such as
 * the Stripe and Paypal APIs. Creating a module between the store and
 * the APIs will free the store from having to handle the details of the
 * APIs (such as each individual API's payment method)
 *
	* */

class Store {
	constructor(paymentProcessor) {
		this.paymentProcessor = paymentProcessor
	}

	purchaseBike(quantity) {
		this.paymentProcessor.pay( 200 * quantity) 
	}

	purchaseHelmet(quantity) {
		this.paymentProcessor.pay(15 * quantity)
	}
}

class StripePaymentProcessor {
	constructor(user) {
		this.stripe = new Stripe(user)
	}

	pay(amountInDollars) {
		this.stripe.makePayment(amountInDollars * 100)
	}
}

class PaypalPaymentProcessor {
	constructor(user) {
		this.paypal = new Paypal()
		this.user = user
	}

	pay(amountInDollars) {
		this.paypal.makePayment(this.user, amountInDollars)
	}
}

class Stripe {
	constructor(user) {
		this.user = user 
	}

	makePayment(amountInCents) {
		console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`)
	}
}

class Paypal {
	makePayment(user, amountInDollars) {
		console.log(`${user} made payment of $${amountInDollars} with Paypal`)
	}
}

const store_Stripe = new Store(new StripePaymentProcessor("Clive"))
store_Stripe.purchaseBike(2)
store_Stripe.purchaseHelmet(2)

const store_Paypal = new Store(new PaypalPaymentProcessor("Carl"))
store_Paypal.purchaseHelmet(2)
store_Paypal.purchaseBike(2)

module.exports = {
	store_Paypal, store_Stripe
}
