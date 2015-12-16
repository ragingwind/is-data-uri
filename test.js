import test from 'ava';
import fn from './';

test('Return valid result of examining data-uri', t => {
	t.is(fn('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='), true);
	t.is(fn('data:text/html;charset=utf-8,<!DOCTYPE%20html><html%20lang%3D"en"><head><title>Embedded%20Window<%2Ftitle><%2Fhead><body><h1>42<%2Fh1><%2Fbody><%2Fhtml>'), true);
	t.is(fn('data:image/svg+xml;base64'), false);
	t.is(fn('data:image/svg+xml;PD94bWwgdmVyzeiBNMyw2djJoMThWNkgzeiIvPjwvZz4KPC9zdmc+Cgo='), false);
	t.is(fn('data:image;base64,PD94bWwgdmVyzeiBNMyw2djJoMThWNkgzeiIvPjwvZz4KPC9zdmc+Cgo='), true);
	t.is(fn(), false);
	t.is(fn('data:'), false);
	t.end();
});
