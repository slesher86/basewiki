<?php
/**
 * Dutch language file for twitter plugin.
 *
 * @license GPL 2 (http://opensource.org/licenses/gpl-2.0.php)
 * @author  Mark C. Prins <mprins@users.sf.net>
 * @copyright Copyright (c) 2012-2013 Mark C. Prins <mprins@users.sf.net>
 *
 */
$lang ['header'] = 'Tijdlijn van';
$lang ['results'] = 'Zoekresultaten van:';
$lang ['timestamp'] = 'Ongeveer %s geleden door';
$lang ['timechunks'] = array (
		array (
				60 * 60 * 24 * 365,
				'jaar',
				'jaren'
		),
		array (
				60 * 60 * 24 * 30,
				'maand',
				'maanden'
		),
		array (
				60 * 60 * 24 * 7,
				'week',
				'weken'
		),
		array (
				60 * 60 * 24,
				'dag',
				'dagen'
		),
		array (
				60 * 60,
				'uur',
				'uren'
		),
		array (
				60,
				'min',
				'min'
		),
		array (
				1,
				'sec',
				'sec'
		)
);
$lang ['configerror'] = 'De waarden van "oauth_consumer_key", "oauth_consumer_secret", "oauth_token" en "oauth_token_secret" moeten gevuld zijn om geauthenticeerde verzoeken te versturen.';
