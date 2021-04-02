describe('Запрос на получения данных о профиле', () => {
  it('должен быть выполнен без ошибки', done => {    
    fetch('https://api.github.com/users/github-test')
      .then(response => {
        expect(response.ok).to.be.true;
        done();
      });
  });

  it('должен вернуть 200 код', done => {
    fetch('https://api.github.com/users/github-test')
      .then(response => {
        expect(response.status).to.equal(200);
        done();
      });
  });
});
