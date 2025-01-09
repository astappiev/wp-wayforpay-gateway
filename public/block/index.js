( () => {
	'use strict';
	const t = window.wc.wcBlocksRegistry,
		e = window.wp.htmlEntities,
		o = window.wc.wcSettings,
		s = window.ReactJSXRuntime,
		i = 'wayforpay',
		n = ( 0, o.getPaymentMethodData )( i, {} ),
		a = ( 0, e.decodeEntities )( n.title ),
		c = n.logo_url,
		d = () => ( 0, e.decodeEntities )( n.description || '' ),
		r = ( t ) => {
			const { PaymentMethodLabel: e } = t.components,
				o = ( 0, s.jsx )( e, { text: a + ' ' } );
			return ( 0, s.jsxs )( 'div', {
				children: [
					o,
					c &&
						( 0, s.jsx )( 'img', {
							src: c,
							alt: `${ a } logo`,
							id: 'checkout_wayforpay_logo',
						} ),
				],
			} );
		},
		w = {
			name: i,
			label: ( 0, s.jsx )( r, {} ),
			content: ( 0, s.jsx )( d, {} ),
			edit: ( 0, s.jsx )( d, {} ),
			canMakePayment: () => ! 0,
			ariaLabel: a,
			supports: { features: n.supports },
		};
	( 0, t.registerPaymentMethod )( w );
} )();