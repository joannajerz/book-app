import filterParams from '../components/filterParams';

it('filterParams is okey', () => {
  expect(filterParams('', '', '')).toEqual('');
  expect(filterParams('harry','','en')).toEqual('intitle:harry&langRestrict=en');
  expect(filterParams('harry','potter','pl')).toEqual('intitle:harry+inauthor:potter&langRestrict=pl');
  expect(filterParams('', 'potter', 'en')).toEqual('+inauthor:potter&langRestrict=en');
  expect(filterParams('','','fr')).toEqual('&langRestrict=fr');
  
});
