var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Compare Numbers', function() {
  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  });
});

describe('Letter grader', function(){
  it('90-100 should be an A', function(){
    expect(letterGrader(98)).to.equal('A');
    expect(letterGrader(91)).to.equal('A');
  });
});

describe('Letter grader', function(){
  it('80-90 should be an B', function(){
    expect(letterGrader(86)).to.equal('B');
    expect(letterGrader(82)).to.equal('B');
  });
});

describe('Letter grader', function(){
  it('70-80 should be an C', function(){
    expect(letterGrader(79)).to.equal('C');
    expect(letterGrader(73)).to.equal('C');
  });
});

describe('Letter grader', function(){
  it('60-70 should be an D', function(){
    expect(letterGrader(65)).to.equal('D');
    expect(letterGrader(61)).to.equal('D');
  });
});

describe('Letter grader', function(){
  it('0-60 should be an F', function(){
    expect(letterGrader(52)).to.equal('F');
    expect(letterGrader(32)).to.equal('F');
  });
});


